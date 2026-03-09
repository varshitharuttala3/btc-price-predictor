let chart;

async function predict(){

const open = parseFloat(document.getElementById("open").value)
const high = parseFloat(document.getElementById("high").value)
const low = parseFloat(document.getElementById("low").value)
const volume = parseFloat(document.getElementById("volume").value)

const response = await fetch("http://127.0.0.1:5000/predict",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
open:open,
high:high,
low:low,
volume:volume
})
})

const data = await response.json()

console.log(data)

const predicted = data.predicted_price || data.prediction || data.result

const suggestion = predicted > open ? "BUY" : "SELL"

document.getElementById("result").innerText =
`Predicted Price: $${predicted} | Suggestion: ${suggestion}`

drawChart(predicted)
}

function drawChart(predicted){

const ctx = document.getElementById("chart")

if(chart) chart.destroy()

chart = new Chart(ctx,{
type:"line",
data:{
labels:["Current","Predicted"],
datasets:[{
label:"BTC Price",
data:[
document.getElementById("open").value,
predicted
],
borderColor:"green"
}]
}
})

}
