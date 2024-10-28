# Project: Creative "Hello World" Generator

## Overview
This project demonstrates a simple application using a **Streamlit frontend** and a **Flask backend** to generate a creative "Hello World" message through a Groq generative AI API. When a user clicks a button on the frontend, it triggers the backend to request a unique greeting message from the API and displays it on the frontend.

## Project Structure
- `frontend.py` - Contains the Streamlit frontend code that displays the button and calls the backend.
- `backend.py` - Contains the Flask backend code that handles API calls to Groq and returns the generated message.
- `.env` - Stores sensitive environment variables, such as the Groq API key.

## API Integration Steps
1. **Environment Setup**: 
   - Used `.env` to securely store and retrieve the Groq API key. 
   - Loaded this key in `backend.py` using `dotenv` for secure access during API calls.

2. **Backend Implementation**:
   - Implemented a Flask application with an endpoint `/generate_greeting` that makes a POST request to the Groq API.
   - The API request uses a specific model and a custom prompt to generate a creative "Hello World" message.
   - Response from the API is formatted and sent back to the frontend.

3. **Frontend Implementation**:
   - Created a Streamlit interface with a button. When clicked, it sends a POST request to the Flask backend.
   - Displays the generated greeting message from the backend on the page.

## Requirements
- **Python 3.7+**
- **Python Packages**:
  - `streamlit`
  - `flask`
  - `requests`
  - `python-dotenv` (for loading environment variables)
  - `groq` (Groq API client, if available; replace with `requests` if custom API client is unavailable)

## Installation

### Step 1: Install Required Packages
```bash
pip install streamlit flask requests python-dotenv
```

### Step 2: Set Up .env File
In the project root, create a `.env` file:
```plaintext
GROQ_API_KEY=your_groq_api_key_here
```

## Running the Application

### Start the Backend
```bash
python backend.py
```
The Flask server will run on http://localhost:5000

### Start the Frontend
In a new terminal:
```bash
streamlit run frontend.py
```
The Streamlit interface will be available at http://localhost:8501

## Usage

1. Open the Streamlit app in your browser at http://localhost:8501
2. Click the "Click here to greet 'Hello World' creatively" button
3. View the generated creative greeting from the Groq API

## Code Documentation

### Backend (Flask)
- Loads environment variables from .env
- Creates a Flask app with /generate_greeting endpoint
- Makes requests to the Groq API
- Returns generated messages as JSON

### Frontend (Streamlit)
- Displays title and interactive button
- Sends POST requests to Flask backend
- Shows generated greetings or error messages

## Project Reflection

### Learnings
- Integration of external APIs with Flask
- Connecting Flask backend with Streamlit frontend
- Secure key storage using .env files

### Challenges
- Ensuring reliable frontend-backend communication
- Handling API failure error messages

### Future Applications
