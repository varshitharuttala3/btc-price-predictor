async function predict(){

let open = document.getElementById("open").value
let high = document.getElementById("high").value
let low = document.getElementById("low").value
let volume = document.getElementById("volume").value

let response = await fetch("/api/predict",{

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

let data = await response.json()

document.getElementById("prediction").innerHTML =
"Predicted BTC Price: " + data.prediction

document.getElementById("suggestion").innerHTML =
"Suggestion: " + data.suggestion

drawGraph(open,data.prediction)

}

function drawGraph(current,predicted){

let ctx=document.getElementById("chart")

new Chart(ctx,{

type:"line",

data:{

labels:["Current Price","Predicted Price"],

datasets:[{

label:"BTC Price",

data:[current,predicted],

borderColor:"#00aaff",

fill:false,

tension:0.3

}]

}

})

}
