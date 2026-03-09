from flask import Flask, request, jsonify
from flask_cors import CORS
from predictor import predict_price

app = Flask(__name__)
CORS(app)  # allow frontend requests

@app.route("/")
def home():
    return {"message": "Bitcoin Prediction API running"}

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json

        features = [
            data["open"],
            data["high"],
            data["low"],
            data["volume"]
        ]

        result = predict_price(features)

        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
