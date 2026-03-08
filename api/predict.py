import json
import numpy as np
import pickle

model = pickle.load(open("model.pkl", "rb"))

def handler(request):

    try:
        data = request.get_json()

        open_price = float(data["open"])
        high = float(data["high"])
        low = float(data["low"])
        volume = float(data["volume"])

        features = np.array([[open_price, high, low, volume]])

        prediction = model.predict(features)[0]

        suggestion = "BUY" if prediction > open_price else "SELL"

        return {
            "statusCode": 200,
            "body": json.dumps({
                "prediction": float(prediction),
                "suggestion": suggestion
            }),
            "headers": {
                "Content-Type": "application/json"
            }
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }
