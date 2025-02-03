from flask import Flask, jsonify, request
from flask_restful import Api, Resource, abort
from flask_sqlalchemy import SQLAlchemy
from models import db, User, Community, Membership, Post
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


 
class JoinCommunity(Resource):
    @jwt_required()
    def post(self, community_name):
        user_id = get_jwt_identity()

        community = Community.query.filter_by(name=community_name).first()

        new_membership = Membership(user_id=user_id, community_id=community.id, role="basic")
        db.session.add(new_membership)
        db.session.commit()

        return {"data": "success"}

class LeaveCommunity(Resource):
    @jwt_required()
    def post(self, community_name):
        user_id = get_jwt_identity()

        print('hallo')
        community = Community.query.filter_by(name=community_name).first()
        print(community)

        Membership.query.filter_by(user_id=user_id, community_id=community.id).delete()
        db.session.commit()

        return {"data": "success"}

    

class CheckMembership(Resource):
    @jwt_required()
    def get(self, community_name):
        user_id = get_jwt_identity()

        community = Community.query.filter_by(name=community_name).first()
        
        membership = Membership.query.filter_by(user_id=user_id, community_id=community.id).first()

        return {"is_member": bool(membership)}, 200


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






        

    
api.add_resource(LogIn, '/auth/login')
api.add_resource(Register, '/auth/register')
api.add_resource(GetUsername, '/getusername')

api.add_resource(CreateCommunity, '/createcommunity')
api.add_resource(JoinCommunity, '/joincommunity/<string:community_name>')
api.add_resource(LeaveCommunity, '/leavecommunity/<string:community_name>')
api.add_resource(CheckMembership, '/checkmembership/<string:community_name>')
api.add_resource(GetCommunities, '/getcommunities')
api.add_resource(CreatePost, '/createpost')

if __name__ == '__main__':
    app.run(debug=True)