let chartInstance = null;

async function predict(){

let open = parseFloat(document.getElementById("open").value)
let high = parseFloat(document.getElementById("high").value)
let low = parseFloat(document.getElementById("low").value)
let volume = parseFloat(document.getElementById("volume").value)

try{

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

catch(error){

console.error("Prediction error:",error)

}

}

function drawGraph(current,predicted){

let ctx=document.getElementById("chart").getContext("2d")

if(chartInstance){
chartInstance.destroy()
}

chartInstance = new Chart(ctx,{

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

},

options:{
responsive:true
}

})

}
