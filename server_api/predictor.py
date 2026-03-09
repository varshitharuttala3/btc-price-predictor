import joblib
import numpy as np

# Load model once when server starts
model = joblib.load("btc_model_v2.pkl")

def predict_price(features):
    try:
        features_array = np.array(features).reshape(1, -1)
        prediction = model.predict(features_array)[0]

        # simple buy/sell logic
        decision = "BUY" if prediction > features[0] else "SELL"

        return {
            "predicted_price": float(prediction),
            "suggestion": decision
        }

    except Exception as e:
        return {"error": str(e)}
