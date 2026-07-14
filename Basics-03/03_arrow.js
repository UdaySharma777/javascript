// ==========================================================
// THIS KEYWORD
// ==========================================================

// 'this' refers to the current object.

// Example

const user = {

    username: "Uday",

    price: 999,

    welcomeMessage: function () {

        console.log(`${this.username}, welcome to website`);

    }

};

user.welcomeMessage();

// Output

// Uday, welcome to website



// Changing Object Property

user.username = "Sharma";

user.welcomeMessage();

// Output

// Sharma, welcome to website



// Here,

// this.username

// refers to

// user.username



// ==========================================================
// this IN GLOBAL SCOPE
// ==========================================================

console.log(this);

// Browser

// Refers to the Window object.

// Node.js

// Refers to an empty object {}



// ==========================================================
// this INSIDE A NORMAL FUNCTION
// ==========================================================

function chai() {

    console.log(this);

}

chai();

// In Node.js,

// 'this' inside a normal function
// refers to the global object.



// ==========================================================
// this CANNOT ACCESS LOCAL VARIABLES
// ==========================================================

function tea() {

    let username = "Uday";

    console.log(this.username);

}

tea();

// Output

// undefined

// 'this' does NOT refer to local variables.



// ==========================================================
// ARROW FUNCTIONS
// ==========================================================

// Syntax

const greet = () => {

    console.log("Hello");

};

greet();



// ==========================================================
// this IN ARROW FUNCTIONS
// ==========================================================

const chai = () => {

    let username = "Uday";

    console.log(this.username);

};

chai();

// Output

// undefined

// Arrow functions do NOT have their own 'this'.
// They inherit 'this' from the surrounding scope.



// ==========================================================
// EXPLICIT RETURN
// ==========================================================

// Uses the return keyword.

const add = (num1, num2) => {

    return num1 + num2;

};

console.log(add(2, 3));

// Output

// 5



// ==========================================================
// IMPLICIT RETURN
// ==========================================================

// No return keyword needed.

const addTwo = (num1, num2) => (num1 + num2);

console.log(addTwo(2, 2));

// Output

// 4



// Curly Braces {}

const multiply = (a, b) => {

    return a * b;

};

// Parentheses ()

const divide = (a, b) => (a / b);



// ==========================================================
// RETURNING OBJECTS
// ==========================================================

// Wrong

const getUser1 = () => {

    name: "Uday";

};

// Returns undefined



// Correct

const getUser2 = () => ({

    name: "Uday"

});

console.log(getUser2());

// Output

// { name: "Uday" }



// ==========================================================
// NORMAL FUNCTION vs ARROW FUNCTION
// ==========================================================

/*

Normal Function

function add(a,b){

    return a+b;

}



Function Expression

const add = function(a,b){

    return a+b;

}



Arrow Function

const add = (a,b) => a+b;

*/



// ==========================================================
// IMPORTANT POINTS
// ==========================================================

// 1. 'this' refers to the current object.
// 2. Inside an object method, this refers to that object.
// 3. 'this' cannot access local variables inside a function.
// 4. Arrow functions do not have their own 'this'.
// 5. Arrow functions inherit 'this' from the surrounding scope.
// 6. Explicit return uses the return keyword.
// 7. Implicit return omits the return keyword.
// 8. Parentheses () allow implicit return.
// 9. Curly braces {} require an explicit return.
// 10. Wrap an object in parentheses when returning it from an arrow function.