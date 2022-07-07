from flask import Flask, request;
from flask_restful import Api, Resource;
import json
from flask_cors import CORS
import os

print(os.getcwd())

app = Flask(__name__)
api = Api(app)
CORS(app)

productsData = json.load(open('data/products.json'))
userDb = json.load(open('data/userDb.json'))

def countId():
    maxId = 0
    for user in userDb:
        print(user)
        if (user['id'] > maxId):
            maxId = user['id']
    return maxId + 1

def rewriteDb():
    with open("api/data/userDb.json", "w") as userListJson:
        userListJson.write(json.dumps(userDb))

def addUser(id, username, email, password):
    userDb.append({'id': id, 'username': username, 'email': email, 'password': password})
    print(userDb)
    rewriteDb()

class Products(Resource):
    def get(self):
        return productsData

class Login(Resource):
    def post(self):
        data = json.loads(request.data.decode('utf8').replace("'", '"'))
        email = data['email']
        password = data['password']

        for user in userDb:
            print(user)
            if user['email'] == email and user['password'] == password:
                return {"id": user['id'], "username": user['username'], "email": user['email']}

class Register(Resource):
    def put(self):
        data = json.loads(request.data.decode('utf-8').replace("'", '"'))
        email = data['email']
        password = data['password']
        username = data['username']
        id = countId()
        addUser(id, username, email, password)
        return {'status': 'successfuly registered. now log in'}

api.add_resource(Products, "/products")
api.add_resource(Login, '/login')
api.add_resource(Register, '/register')

if __name__ == "__main__":
    app.run(host='0.0.0.0')
