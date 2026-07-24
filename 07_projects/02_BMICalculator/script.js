const { partialDeepStrictEqual } = require("node:assert")

const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const Height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    if(Height === '' || Height < 0 || isNaN(Height)){
        results.innerHTML = `please give a valid Height ${Height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`
    }
    else{
        const BMI = (weight/((Height*Height)/10000)).toFixed(2)
        results.innerHTML = `<span>${BMI}</span>`
    }
});

// add one more output to show wether weight overweight normal or underweight
