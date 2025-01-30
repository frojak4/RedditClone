from flask import Flask, jsonify
from flask_restful import Api, Resource, abort
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://Frode:JPEGMAFIA@localhost/RedditClone' #Dette er ikkje mitt faktiske passord altså
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), nullable=False, unique=True)
    password_hash = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "password_hash": self.password_hash
        }
    



class GetUser(Resource):
    def get(self):
        result = User.query.all()
        users = [user.to_dict() for user in result]
        return jsonify(users), 200





 
        
        
    

api.add_resource(GetUser, '/helloworld')


if __name__ == '__main__':
    app.run(debug=True)