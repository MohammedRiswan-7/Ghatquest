from flask import Flask, request, jsonify
from flask_cors import CORS
import cohere

app = Flask(__name__)
  # allows requests from React frontend

COHERE_API_KEY = "61o0I5i0zI187QoPuA3tztuyV7VTBhiJnpH3JeDx"
co = cohere.Client(COHERE_API_KEY)

@app.route("/start-planning", methods=["POST"])
def start_planning():
    data = request.get_json()
    user_input = data.get("message", "").strip()

    if not user_input:
        return jsonify({"status": "error", "reply": "Please provide input!"})

    try:
        # Generate AI response using Cohere
        response = co.generate(
            model="command",
            prompt=f"User: {user_input}\nAI:",
            max_tokens=150,
            temperature=0.7
        )
        ai_reply = response.generations[0].text.strip()
    except Exception as e:
        print("Cohere API error:", e)
        ai_reply = "Sorry, I couldn't process your request."

    return jsonify({"status": "ok", "reply": ai_reply})

if __name__ == "__main__":
    app.run(debug=True)
