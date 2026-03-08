# BTC Price Prediction Web App

A simple machine learning web application that predicts Bitcoin (BTC) price based on input market features.
The application provides a predicted price, a buy/sell suggestion, and a graph visualization.

The project includes a clean dashboard interface with a dark blue and black theme and can be deployed easily using Vercel.

---

## Project Overview

This project uses a trained machine learning model to estimate Bitcoin price from selected input features.
Users enter four market indicators, and the system returns a predicted BTC value along with a basic trading suggestion.

The interface is designed to be simple and responsive so it works well on desktop and mobile screens.

---

## Features

* Clean blue and black dashboard UI
* Four input features for prediction
* Machine learning price prediction
* Buy or Sell suggestion based on prediction
* Graph visualization of predicted values
* Lightweight frontend and backend
* Easy deployment on Vercel

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

## Technologies Used

Frontend

* HTML
* CSS
* JavaScript
* Chart.js for graph visualization

Backend

* Python
* Scikit-learn
* NumPy

Deployment

* Vercel
* GitHub

---

## How It Works

1. User enters four feature values in the dashboard.
2. The frontend sends these values to the backend API.
3. The trained machine learning model predicts the BTC price.
4. The application displays:

   * Predicted price
   * Buy or Sell suggestion
5. A graph is displayed below the result.

---

## Setup Instructions

Clone the repository.

```
git clone https://github.com/varshitharuttala3/btc-price-predictor.git
```

Navigate to the project folder.

```
cd btc-price-predictor
```

Install the required Python libraries.

```
pip install -r requirements.txt
```

Make sure the trained model file `model.pkl` is placed inside the **model** folder.

---

## Deployment on Vercel

1. Push the project to GitHub.
2. Log in to Vercel.
3. Click **Add New Project**.
4. Import the GitHub repository.
5. Deploy.

Vercel will automatically build and deploy the application.

---

## Example Output

* Predicted BTC Price
* Buy or Sell suggestion
* Graph showing prediction

---

## Future Improvements

* Real-time BTC market data integration
* Advanced trading indicators
* Live price chart visualization
* Improved prediction models

---

## Author

Varshitha

---

## License

This project is open source and available for learning and research purposes.
