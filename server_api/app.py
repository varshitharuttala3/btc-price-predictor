from flask import Flask, request, jsonify
from flask_cors import CORS
from predictor import predict_price

app = Flask(**name**)
CORS(app)

@app.route("/")
def home():
return {"message": "Bitcoin Prediction API running"}

@app.route("/predict", methods=["POST"])
def predict():
try:
data = request.json

```
    open_price = data["open"]  
    high = data["high"]  
    low = data["low"]  
    volume = data["volume"]  

    features = [open_price, high, low, volume]  

    predicted_price = predict_price(features)  

    suggestion = "BUY" if predicted_price > open_price else "SELL"  

    return jsonify({  
        "predicted_price": predicted_price,  
        "suggestion": suggestion  
    })  

except Exception as e:  
    return jsonify({"error": str(e)})  
```

if **name** == "**main**":
app.run(debug=True)
