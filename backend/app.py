from flask import Flask, jsonify, request
from flask_restful import Api, Resource, abort
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func, case
from models import db, User, Community, Membership, Post, Vote
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from datetime import timedelta
from flask_cors import CORS
import uuid

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://Frode:JPEGMAFIA@localhost/RedditClone' #Dette er ikkje mitt faktiske passord altså
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'secretkey'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)

db.init_app(app)
jwt = JWTManager(app)
api = Api(app)
CORS(app)

def abort_if_user_exists(username):
    user = User.query.filter_by(username=username).first()
    if user:
        abort(409, error="Username already taken")


class GetUsername(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()

        user = User.query.filter_by(id=user_id).first()
        
        return {"username": user.username}, 200



class LogIn(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        user = User.query.filter_by(username=username).first()

        if not user or not user.check_password(password):
            return {"message": "Invalid Credentials"}
        
        access_token = create_access_token(identity=user.id)
        
        return {"access_token": access_token}, 200
    
class Register(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        abort_if_user_exists(username)
        password = data.get('password')
        new_user = User(username=username)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()

        user = User.query.filter_by(username=username).first()
        access_token = create_access_token(identity=user.id)
        return {"access_token": access_token}, 200


class CreateCommunity(Resource):
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        data = request.get_json()
        name = data.get('name')

        community_check = Community.query.filter_by(name=name).first()

        if community_check:
            abort(409, error="Community name already taken")

        new_community = Community(name=name, user_id=user_id)
        
        db.session.add(new_community)
        db.session.commit()


        new_membership = Membership(user_id=user_id, community_id=new_community.id, role="admin")
        db.session.add(new_membership)
        db.session.commit()

        return {"data": "success"}, 200


 
class HandleMembership(Resource):
    @jwt_required()
    def get(self, community_name):
        user_id = get_jwt_identity()

        community = Community.query.filter_by(name=community_name).first()
        
        membership = Membership.query.filter_by(user_id=user_id, community_id=community.id).first()

        return {"is_member": bool(membership)}, 200

    @jwt_required()
    def post(self, community_name):
        user_id = get_jwt_identity()

        community = Community.query.filter_by(name=community_name).first()

        new_membership = Membership(user_id=user_id, community_id=community.id, role="basic")
        db.session.add(new_membership)
        db.session.commit()

        return {"data": "success"}

    @jwt_required()
    def delete(self, community_name):
        user_id = get_jwt_identity()

        print('hallo')
        community = Community.query.filter_by(name=community_name).first()
        print(community)

        Membership.query.filter_by(user_id=user_id, community_id=community.id).delete()
        db.session.commit()

        return {"data": "success"}




class GetCommunities(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()

        memberships = Membership.query.filter_by(user_id=user_id).all()

        community_ids = [membership.community_id for membership in memberships]

        communities = Community.query.filter(Community.id.in_(community_ids)).all()

        data = [{"id": c.id, "name": c.name} for c in communities ], 200

        return {"data": data}, 200


class CreatePost(Resource):
    @jwt_required()
    def post(self):
        print('we here')
        user_id = get_jwt_identity()
        data = request.get_json()
        title = data.get('title')
        content = data.get('content')
        communityname = data.get('community')
        random_uuid = str(uuid.uuid4())
        
        community = Community.query.filter_by(name=communityname).first()

        new_post = Post(uuid=random_uuid, title=title, content=content, user_id=user_id, community_id=community.id)

        db.session.add(new_post)
        db.session.commit()

        return {"success": True, "uuid": random_uuid}

class GetPost(Resource):
    def get(self, postUUID):
        post = db.session.query(Post, User.username, Community.name).join(User, Post.user_id == User.id).join(Community, Post.community_id == Community.id).filter(Post.uuid == postUUID).first()
    

        if not post:
            abort(404, error='Post not found')
        
        post_data, username, community_name = post

        votes_query = post_data.votes
        comments_query = post_data.comments

        upvotes = votes_query.filter_by(type='up').all()
        downvotes = votes_query.filter_by(type='down').all()
        votes = len(upvotes) - len(downvotes)
        comments = comments_query.count()
        
        
        return {"title": post_data.title, "id": post_data.id, "created_at": post_data.created_at.isoformat(), "content": post_data.content, "username": username, "community": community_name, "votes": votes, "comments": comments}, 200





class GetPosts(Resource):
    def get(self, community_name):
        community = Community.query.filter_by(name=community_name).first()

        posts = db.session.query(Post, User.username).join(User, Post.user_id == User.id).filter(Post.community_id==community.id).all()


        return [{"title": p[0].title, "id": p[0].id, "uuid": p[0].uuid, "created_at": p[0].created_at.isoformat(), "content": p[0].content, "username": p[1], "community": community_name} for p in posts]
        

class UserVote(Resource):
    @jwt_required()
    def get(self, post_id):
        print('hallo')
        user_id = get_jwt_identity()
        
        upvote = Vote.query.filter(post_id == post_id, user_id == user_id).first()
        
        if not upvote:
            return {"vote": False}

        return {"vote": True, "type": upvote.type}
    @jwt_required()
    def post(self, post_id, type):
        user_id = get_jwt_identity()

        Vote.query.filter_by(user_id=user_id, post_id=post_id).delete()

        new_vote = Vote(user_id=user_id, post_id=post_id, type=type)

        db.session.add(new_vote)
        db.session.commit()
        return {"message": "vote successfully added"}
    @jwt_required()
    def delete(self, post_id):
        user_id = get_jwt_identity()

        Vote.query.filter(user_id=user_id, post_id=post_id).delete()

        return {"message": "vote successfully deleted"}
    




    
api.add_resource(LogIn, '/auth/login')
api.add_resource(Register, '/auth/register')
api.add_resource(GetUsername, '/getusername')

api.add_resource(CreateCommunity, '/createcommunity')
api.add_resource(HandleMembership, '/handlemembership/<string:community_name>')
api.add_resource(GetCommunities, '/getcommunities')
api.add_resource(CreatePost, '/createpost')
api.add_resource(GetPost, '/getpost/<string:postUUID>')
api.add_resource(GetPosts, '/getposts/<string:community_name>')

api.add_resource(UserVote, '/uservote/<int:post_id>/<string:type>', '/uservote/<int:post_id>/<string:type>')

if __name__ == '__main__':
    app.run(debug=True)