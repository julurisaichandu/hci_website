'''
File: backend.py
Purpose: This flask backend application interacts with a streamlit frontent. Groq api is used foe language model.
Author: Saichandu Juluri
Date: 10/28/2024
'''
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from groq import Groq
import requests
import os

# Load environment variables from .env file, making sensitive data like API keys secure
load_dotenv()

# Retrieve the Groq API key from the environment variables
groq_api_key = os.getenv("GROQ_API_KEY")

# Initialize the Flask application
app = Flask(__name__)

@app.route('/')
def initial_method():
    """
    Basic route to verify that the server is running.
    Returns a simple message for the root endpoint.
    """
    return "Hello World! initial page"

# Route to handle API request to generate a creative greeting
@app.route('/generate_hello_world', methods=['POST'])
def generate_greeting():
    """
    Endpoint to generate a creative 'Hello World' greeting using the Groq API.
    It sends a request to the Groq API, retrieves a response, and returns it to the client.
    """
    try:
        # Initialize the Groq client with the provided API key
        client = Groq(api_key=groq_api_key)

        # Send a chat completion request to the Groq API
        # The model (e.g., "llama-3.1-70b-versatile") and the prompt (instructions to create a greeting)
        # are specified in the messages parameter.
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": "Create a 'Hello World' message creatively, keeping humanity in focus in this AI-driven world. Keep it under 100 words and in simple english.",
                }
            ],
            model="llama-3.1-70b-versatile",
        )

        # Retrieve the generated content from the API response
        greeting_message = chat_completion.choices[0].message.content
        print(greeting_message)  # Optional: print the response for debugging

        # Return the generated greeting message as JSON response
        return jsonify({"greeting": greeting_message})

    except requests.exceptions.RequestException as e:
        # Log the exception in case the API request fails
        print(f"API Request failed: {e}")
        return jsonify({"error": "Failed to generate greeting"}), 500

# Run the Flask app on port 5000 for local development
if __name__ == "__main__":
    app.run(port=5000)
