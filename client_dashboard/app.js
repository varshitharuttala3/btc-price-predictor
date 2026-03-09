let chart

function drawChart(predicted){

const ctx = document.getElementById("chart")

if(chart) chart.destroy()

chart = new Chart(ctx,{
type:"line",
data:{
labels:["Current","Predicted"],
datasets:[{
label:"BTC Price",
data:[document.getElementById("open").value,predicted],
borderColor:"green"
}]
}
})

}
