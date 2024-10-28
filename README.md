# "Hello World" Generator

## Overview
This project demonstrates a web application using a **Streamlit frontend** and a **Flask backend** to generate a creative "Hello World" message through a Groq generative AI API. A unique greeting message is displayed on the UI when a user clicks a button on the front end.

## Project Structure
- `frontend.py` - Contains the Streamlit frontend code that displays the button and calls the backend.
- `backend.py` - Contains the Flask backend code that handles API calls to Groq and returns the generated message.
## Implementation
1. **Environment Setup**: 
   - Used `.env` to securely store and retrieve the Groq API key. 
   - Loaded this key in `backend.py` using `dotenv` package.

2. **Backend Implementation**:
   - Implemented a Flask application with an endpoint `/generate_hello_world` that makes a POST request to the Groq API.
   - The API request uses a specific model and a custom prompt to generate a creative "Hello World" message.
   - Response from the API is formatted and sent back to the front end.

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
GROQ_API_KEY = "your_groq_api_key_here"
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
**Note**: Before running, check whether another app is not running on the ports 5000 and 8501

## Usage

1. Open the Streamlit app in your browser at http://localhost:8501
2. Click the "Click here to for 'Hello World' greetings" button
3. View the generated creative greeting from the Groq API in the UI

## Code Documentation

### Backend (Flask)
- Loads environment variables from .env
- Creates a Flask app with /generate_hello_world endpoint
- Makes requests to the Groq API
- Returns generated messages as JSON

### Frontend (Streamlit)
- Displays title and interactive button
- Sends POST requests to Flask backend
- Shows generated greetings or error messages

## Project Reflection
- I learned how to design frontends easily using Streamlit with Python and about using a Flask backend for calling a language model API.
- I explored different paid and free language model API providers and chose Groq for this project because it is fast and free.
- I gained experience in integrating backend and frontend parts of an application and securely storing API variables.
- One challenge I faced was accessing environment variables in Flask. I initially had errors when using environment variables directly but learned to access them correctly with python-dotenv and os libraries.
With these skills, I can now create more complex web applications that take user input through chat and provide responses from the backend using a language model API. I can apply my Streamlit skills to build frontends with multiple elements for interactive UI. Using the language model API, I can perform tasks like summarizing, translating, or answering user input from the front end. However, I’ll need to work on effective prompt engineering for the best results.

## References for more info
- https://console.groq.com/docs/quickstart
- https://www.restack.io/docs/streamlit-knowledge-streamlit-flask-api-integration
