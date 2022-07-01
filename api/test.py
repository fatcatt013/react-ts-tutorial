from urllib import response
import requests

BASE = 'http://localhost:5000/'

reponse = request.get(BASE + 'helloworld')
print(response.json())