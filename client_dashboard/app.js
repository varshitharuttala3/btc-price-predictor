let chart

async function predict(){

const open = document.getElementById("open").value
const high = document.getElementById("high").value
const low = document.getElementById("low").value
const volume = document.getElementById("volume").value

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

document.getElementById("result").innerText =
"Predicted Price: $" + data.predicted_price +
" | Suggestion: " + data.suggestion

drawChart(data.predicted_price)

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
