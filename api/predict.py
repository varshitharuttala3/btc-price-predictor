import json
import joblib
import numpy as np
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
model_path = os.path.join(BASE_DIR, "model.pkl")

model = joblib.load(model_path)

def main(request):

    try:
        body = json.loads(request.body)

        open_price = float(body["open"])
        high = float(body["high"])
        low = float(body["low"])
        volume = float(body["volume"])

        features = np.array([[open_price, high, low, volume]])

        prediction = model.predict(features)[0]

        suggestion = "BUY" if prediction > open_price else "SELL"

        return {
            "statusCode": 200,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({
                "prediction": float(prediction),
                "suggestion": suggestion
            })
        }

    except Exception as e:

        return {
            "statusCode": 500,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"error": str(e)})
        }
