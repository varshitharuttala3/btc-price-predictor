# BTC Price Prediction Dashboard

A machine learning powered web application that predicts the future price of Bitcoin based on selected market features.
The application provides a predicted BTC price, a trading suggestion (Buy or Sell), and a graphical visualization of the prediction.

The project combines a Python machine learning backend with a clean interactive web dashboard and is designed for easy deployment using Vercel.

---

## Project Preview

A simple dashboard where users:

• Enter market feature values
• Click Predict
• Receive a BTC price prediction
• Get a Buy or Sell suggestion
• View a graph of the prediction

The interface uses a dark theme with subtle blue highlights for a clean crypto-style dashboard.

---

## Key Features

* Machine learning based BTC price prediction
* Clean crypto-style dashboard UI
* Four feature input system
* Automatic Buy or Sell suggestion
* Graph visualization of prediction results
* Responsive design for different screen sizes
* Lightweight architecture suitable for serverless deployment

---

## Technology Stack

Frontend
HTML
CSS
JavaScript
Chart.js

Backend
Python
Scikit-learn
NumPy
Joblib

Deployment
GitHub
Vercel (Serverless Functions)

---

## Project Structure

```
btc-price-predictor
│
├── api
│   └── predict.py
│
├── model
│   └── model.pkl
│
├── public
│   └── index.html
│
├── static
│   ├── style.css
│   └── script.js
│
├── requirements.txt
└── vercel.json
```

---

## How the System Works

1. User enters the required feature values in the dashboard.
2. The frontend sends the data to the backend prediction API.
3. The machine learning model processes the input features.
4. The model returns a predicted BTC price.
5. The system evaluates the prediction and generates a trading suggestion.
6. The predicted value is displayed along with a graph.

---

## Installation

Clone the repository.

```
git clone https://github.com/varshitharuttala3/btc-price-predictor.git
```

Navigate to the project folder.

```
cd btc-price-predictor
```

Install required dependencies.

```
pip install -r requirements.txt
```

Ensure that the trained model file `model.pkl` is placed inside the **model** directory.

---

## Deployment (Vercel)

1. Push the project to GitHub.
2. Go to Vercel and sign in.
3. Click **Add New Project**.
4. Import the GitHub repository.
5. Deploy the application.

Vercel automatically builds and hosts the project.

---

## Example Output

Predicted BTC Price
Trading Suggestion (Buy or Sell)
Prediction Graph

---

## Future Improvements

• Integration with real-time cryptocurrency APIs
• Advanced deep learning models for prediction
• Live trading indicators and technical analysis
• Real-time BTC charts and historical analysis
• User authentication and portfolio tracking

---

## Author

Varshitha

---

## License

This project is open source and available for educational and research purposes.
