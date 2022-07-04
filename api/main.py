from flask import Flask, request;
from flask_restful import Api, Resource;
import json
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

productsData = json.load(open('api/data/products.json'))
userDb = json.load(open('api/data/userDb.json'))

class Products(Resource):
    def get(self):
        return productsData

class Login(Resource):
    def post(self):
        data = json.loads(request.data.decode('utf8').replace("'", '"'))
        print(data)
        email = data['email']
        password = data['password']

        for user in userDb:
            print(user)
            if user['email'] == email and user['password'] == password:
                return {"id": user['id'], "username": user['username'], "email": user['email']}


class Register(Resource):
    def put(self, data):
        return

api.add_resource(Products, "/products")
api.add_resource(Login, '/login')

if __name__ == "__main__":
    app.run(debug=True)
