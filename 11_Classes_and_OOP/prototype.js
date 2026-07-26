// // let myname = "Uday           "

// const { maybeCoerceBoolean } = require("openai/core.mjs");

// // console.log((myname.trueLength));
// let myHeros = ['thor',"spiderman"]

// let heroPower = {
//     thor:"hammer",
//     spiderman:"sling",

//     getSpiderPower: function(){
//         console.log(`spidey power is{this.spiderman} `);
    
// }

// }

// Object.prototype.Uday = function(){
//     console.log(`uday is present in all objects`);
// }

// // heroPower.Uday()

// myHeros.Uday()

// // inheritance

const Teacher = {
    makeVedio: true
}
const teachingSupport = {
    isAvailable: false
}

// const TASupport = {
//     makeAssignment:'JS assignment',
//     fullTime: true
// }
// Teacher.__proto__=User

//modern syntax

Object.setPrototypeOf(teachingSupport,Teacher)

let anotherUsername = "uday"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"uday".trueLength()
"Coffee".trueLength()

