let chart;

async function predict() {

    const open = document.getElementById("open").value
    const high = document.getElementById("high").value
    const low = document.getElementById("low").value
    const volume = document.getElementById("volume").value

    const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            open: parseFloat(open),
            high: parseFloat(high),
            low: parseFloat(low),
            volume: parseFloat(volume)
        })
    })

    const data = await response.json()

    const predicted = data.predicted_price
    const suggestion = data.suggestion

    document.getElementById("result").innerText =
        `Predicted Price: $${predicted} | Suggestion: ${suggestion}`

    drawChart(predicted)
}

function drawChart(predicted) {

    const ctx = document.getElementById("chart")

    if(chart) chart.destroy()

    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Current", "Predicted"],
            datasets: [{
                label: "BTC Price",
                data: [
                    document.getElementById("open").value,
                    predicted
                ],
                borderColor: "green"
            }]
        }
    })
}
