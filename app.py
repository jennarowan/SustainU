from flask import Flask, request
from flask_restful import reqparse, Api, Resource
import os
from dotenv import load_dotenv
import openai

load_dotenv()
api_key = os.getenv("API_KEY")

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('task')

class Message(Resource):
    def get(self):
        user_input = request.args.get("task")
        if user_input:
            prompt = "You said: " + user_input
            response = generate_response(prompt)  # Call the generate_response function
            return {"message": response}
        else:
            return {"message": 'Hello World'}

api.add_resource(Message, '/api/hello')

def generate_response(prompt):
    openai.api_key = api_key

    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=100 
    )

    return response.choices[0].text

if __name__ == '__main__':
    app.run(debug=True)
