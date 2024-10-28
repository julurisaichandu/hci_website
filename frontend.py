"""
File: frontend.py
Purpose: This Streamlit frontend application interacts with a Flask backend to generate a creative "Hello World" greeting.
Author: Saichandu Juluri
Date: 10/28/2024
"""

import streamlit as st
import requests

# Set the title for the Streamlit application
st.title("Creative Hello World Greeting")

# Check if the button is clicked
if st.button("Click here to for 'Hello World' greetings"):
    try:
        # Send a POST request to the Flask backend to get a creative greeting
        response = requests.post("http://localhost:5000/generate_hello_world")
        
        # Raise an error if the response status code is not 200 (successful)
        response.raise_for_status()
        
        # Extract the 'greeting' message from the response JSON from flask backend
        greeting = response.json().get("greeting", "No greeting found")
        
        # Display the generated greeting in the UI
        st.write(f"Generated Greeting: {greeting}")
        
    except requests.exceptions.RequestException as e:
        # If an error occurs, display an error message in the UI
        st.write("Error: Could not fetch greeting.")
