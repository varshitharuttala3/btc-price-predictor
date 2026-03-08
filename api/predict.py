import json
import joblib
import numpy as np

model = joblib.load("model.pkl")

def handler(request):

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
        "body": json.dumps({
            "prediction": float(prediction),
            "suggestion": suggestion
        })
    }
