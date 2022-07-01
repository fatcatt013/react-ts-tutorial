from flask import Flask;
from flask_restful import Api, Resource;
import json
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

productsData = json.load(open('api/data/products.json'))

class Products(Resource):
    def get(self):
        return productsData

api.add_resource(Products, "/products")

if __name__ == "__main__":
    app.run(debug=True)
