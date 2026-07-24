const cloack = document.getElementById('clock')
// document.querySelector("#.clock")
//console.log(date.toLocaleDateString());

setInterval(function(){
    let date = new Date();
    cloack.innerHTML = date.toLocaleTimeString();
},1000);























