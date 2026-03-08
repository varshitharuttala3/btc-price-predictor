async function predictPrice() {

    const open = document.getElementById("open").value;
    const high = document.getElementById("high").value;
    const low = document.getElementById("low").value;
    const volume = document.getElementById("volume").value;

    const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            open: open,
            high: high,
            low: low,
            volume: volume
        })
    });

    const data = await response.json();

    document.getElementById("result").innerText =
        "Predicted Price: $" + data.prediction;

    document.getElementById("suggestion").innerText =
        "Suggestion: " + data.suggestion;
}
