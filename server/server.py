import base64
import datetime
import bcrypt
from os import path
from flask import Flask, Response, flash, jsonify, redirect, render_template, request, url_for
from flask_cors import CORS, cross_origin
import openai
from flask_login import login_user, login_required
from flask_login import logout_user, current_user, LoginManager, UserMixin
from flask_sqlalchemy import SQLAlchemy
from Crypto.Cipher import AES


# Identifies our database file.
DB_NAME = "data.db"


# app instance
app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] = 'WeAreVeryMagical1357913'

# Call the db
db = SQLAlchemy(app)



with app.app_context():
    if not path.exists(DB_NAME):
        db.create_all()


class User(UserMixin, db.Model):
    """Creates the User table in the database."""
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    email_address = db.Column(db.String(200), nullable=False)
    user_interests = db.Column(db.String(500))

    """Initializes a new instance of the class"""
    def __init__(self, username, password, email_address, user_interests):
        self.username = username
        self.password = password
        self.email_address = email_address
        self.user_interests = user_interests


with app.app_context():
    db.create_all()


def pad(data):
    """This function will pad the data to ensure it is a multiple of 16 bytes."""
    block_size = 16
    padding_length = block_size - (len(data) % block_size)
    padding_result = bytes([padding_length]) * padding_length
    return data + padding_result


def unpad(data):
    """Removes padding and returns data."""
    padding_length = data[-1]
    return data[:-padding_length]


def encrypt_text(password):
    """This function will encrypt the provided string with AES."""

    # Pad the message to ensure it is a multiple of 16 bytes
    padded_message = pad(password.encode())
    # create a new AES object
    PASSWORD_KEY_AES = pad(str.encode(password))
    aes_object = AES.new(PASSWORD_KEY_AES, AES.MODE_ECB)
    # encrypt the message
    encrypted_message = aes_object.encrypt(padded_message)
    ciphertext = base64.b64encode(encrypted_message)
    return ciphertext


login_manager = LoginManager()
login_manager.login_view = 'login'

# User Loader for Login Manaager

@login_manager.user_loader
def load_user(user_id):
    """Returns the user's id."""
    return User.query.get(user_id)


def current_time():
    """Returns the current time formatted to year, month, date and time."""
    date_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    return date_time

# Routes

# /api/home
@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message': "The best group at Technica is:",
        'people': ['Fariha', 'Irene', 'Isyhara', 'Jenna']
    })


@app.route('/api/login', methods=['GET', 'POST'])
def login():
    """Renders the login page, and handles the user authentication."""
    if request.method == 'POST':
        
        # Get values entered in login
        username = request.form['username']
        password = request.form['password']

        log_user = User.query.filter_by(username=username).first()

        # Check for existing user before logging in
        if log_user:
            if bcrypt.checkpw(password.encode(), log_user.password):
                login_user(log_user, remember=True)
                return
            else:
                flash('Incorrect Password')
        else:
            flash('User Not Found')

    return


@app.route('/api/register', methods=['POST', 'GET'])
@cross_origin()
def index_page():

    if request.method == 'POST':

        data = request.get_json()

        new_username = data.get('name')
        new_password = data.get('password')
        new_email_address = data.get('email')

        new_rec = User(new_username, new_password,
                       new_email_address, user_interests="")
        db.session.add(new_rec)
        db.session.commit()
        login_user(new_rec, remember=True)

        # Print info for every user in database
        all_users = User.query.all()
        for user in all_users:
            print(user.username)
            print(user.password)
            print(user.email_address)
            print(user.user_interests)

        return jsonify({
            'message': "You have successfully registered!",
            'user': new_username,
            'email': new_email_address
        })
    

login_manager.init_app(app)


if __name__ == "__main__":
    app.run(debug=True, port=8080)

