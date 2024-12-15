
from flask import Flask, request, jsonify
import tensorflow as tf
from keras.models import load_model
from PIL import Image
import numpy as np
import cv2
import os
import sys
from contextlib import contextmanager
from flask_cors import CORS
from firebase_admin import credentials, firestore, initialize_app, auth
import logging
import firebase_admin
from firebase_admin import exceptions as firebase_exceptions


app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - [%(levelname)s] - %(message)s')

# Set TensorFlow logging level
tf.get_logger().setLevel('CRITICAL')
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

# Initialize Firebase
cred_path = 'C:\\Users\\deepa\\Downloads\\credentials.json'
cred = credentials.Certificate(cred_path)
initialize_app(cred)

# Load the trained model
model_path = 'C:\\Users\\deepa\\practice\\brainmri.keras'

@contextmanager
def suppress_output():
    with open(os.devnull, 'w') as fnull:
        old_stdout = sys.stdout
        sys.stdout = fnull
        try:
            yield
        finally:
            sys.stdout = old_stdout

with suppress_output():
    model = tf.keras.models.load_model(model_path)

#---------------------------------PREDICT----------------------------------------------
@app.route('/predict', methods=['POST'])
def predict():
    file = request.files.get('image')
    if not file:
        return jsonify({'error': 'No image file uploaded'}), 400
    
    img = Image.open(file)
    img = np.array(img)
    img = cv2.resize(img, (150, 150))
    img = img.reshape(1, 150, 150, 3)
    
    prediction = model.predict(img)
    prediction_label = np.argmax(prediction, axis=1)[0]
    labels = {0: 'Glioma Tumor', 1: 'No Tumor', 2: 'Meningioma Tumor', 3: 'Pituitary Tumor'}
    result = labels.get(prediction_label, 'Unknown')
    
    return jsonify({'result': result})

# --------------------------------------REGISTER------------------------------------------------

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')
    age = data.get('age')
    gender = data.get('gender')
    address = data.get('address')
    nationality = data.get('nationality')
    phone = data.get('phone')
    bloodType = data.get('bloodType')  # Example for additional fields

    try:
        # Create user in Firebase Authentication
        user_record = auth.create_user(
            email=email,
            password=password
        )
        # Add additional data to Firestore
        db = firestore.client()
        user_data = {
            'name': name,
            'age': age,
            'gender': gender,
            'address': address,
            'nationality': nationality,
            'phone': phone,
            'bloodType': bloodType  # Store additional fields if necessary
        }
        db.collection('users').document(user_record.uid).set(user_data)
        return jsonify({"uid": user_record.uid}), 200
    except firebase_admin.exceptions.FirebaseError as e:
        # Handle Firebase errors
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        # Handle other errors
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

#--------------------------------------LOGIN-------------------------------
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']
    
    try:
        # Use Firebase Admin SDK to retrieve the user by email
        user = auth.get_user_by_email(email)

        # Retrieve additional user data from Firestore
        db = firestore.client()
        user_doc = db.collection('users').document(user.uid).get()
        
        if user_doc.exists:
            user_data = user_doc.to_dict()
            # Send user data to React frontend
            return jsonify(user_data), 200
        else:
            return jsonify({'error': 'User data not found'}), 404

    except firebase_admin.exceptions.FirebaseError as e:
        # Handle Firebase errors, such as user not found or wrong password
        return jsonify({'error': str(e)}), 401
    except Exception as e:
        # Handle other possible errors
        return jsonify({'error': str(e)}), 500    
    
    
if __name__ == '__main__':
    app.run(debug=True)
