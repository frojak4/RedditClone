from flask import Flask, jsonify, request
from flask_restful import Api, Resource, abort
from flask_sqlalchemy import SQLAlchemy
from models import db, User
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from datetime import timedelta
from flask_cors import CORS

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


 


        
    
api.add_resource(LogIn, '/auth/login')
api.add_resource(Register, '/auth/register')
api.add_resource(GetUsername, '/getusername')


if __name__ == '__main__':
    app.run(debug=True)