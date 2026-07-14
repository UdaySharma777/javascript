// ==========================================================
// JAVASCRIPT FUNCTIONS
// ==========================================================


// A function is a block of code that performs a specific task.

// Syntax

function greet() {

    console.log("Hello");
}

greet();



// ==========================================================
// FUNCTION WITH PARAMETERS
// ==========================================================

function addTwoNumbers(number1, number2) {

    return number1 + number2;
}

console.log(addTwoNumbers(3, 3));

// Output

// 6



// Parameters vs Arguments

function multiply(a, b) {

    return a * b;
}

// Parameters

// a
// b

multiply(5, 10);

// Arguments

// 5
// 10



// ==========================================================
// RETURN
// ==========================================================

function subtract(a, b) {

    return a - b;
}

const result = subtract(10, 4);

console.log(result);

// Output

// 6


// Code after return never executes.

function demo() {

    return 10;

    console.log("Hello");
}



// ==========================================================
// DEFAULT PARAMETERS
// ==========================================================

function loginUserMessage(username = "Sharma") {

    return `Hello ${username}, you are now logged in.`;
}

console.log(loginUserMessage("Uday"));

// Hello Uday...

console.log(loginUserMessage());

// Hello Sharma...



// Checking Undefined

function login(username) {

    if (username === undefined) {

        return "Please enter a username";
    }

    return `Welcome ${username}`;
}

console.log(login());



// Shorter way

function login2(username) {

    if (!username) {

        return "Please enter a username";
    }

    return `Welcome ${username}`;
}



// ==========================================================
// REST OPERATOR (...)
// ==========================================================

// Collects multiple arguments into one array.

function calculateCartPrice(...prices) {

    return prices;
}

console.log(calculateCartPrice(100, 200, 300));

// Output

// [100,200,300]



// Rest with normal parameters

function calculateCartPrice(val1, val2, ...prices) {

    console.log(val1);

    console.log(val2);

    console.log(prices);
}

calculateCartPrice(100, 200, 300, 400, 500);

// val1 = 100

// val2 = 200

// prices = [300,400,500]



// ==========================================================
// PASSING OBJECT TO FUNCTION
// ==========================================================

const user = {

    username: "Uday",

    age: 22

};

function handleObject(anyObject) {

    console.log(

        `Username is ${anyObject.username} and age is ${anyObject.age}`

    );
}

handleObject(user);



// Direct Object

handleObject({

    username: "Rahul",

    age: 20

});



// ==========================================================
// PASSING ARRAY TO FUNCTION
// ==========================================================

const myArray = [

    10,

    20,

    30,

    40

];

function returnSecondValue(getArray) {

    return getArray[1];
}

console.log(returnSecondValue(myArray));

// Output

// 20



// Direct Array

console.log(

    returnSecondValue([100,200,300,400])

);

// Output

// 200



// ==========================================================
// FUNCTION EXPRESSION
// ==========================================================

const sayHello = function () {

    console.log("Hello");
};

sayHello();



// ==========================================================
// FUNCTION DECLARATION
// ==========================================================

function greetUser() {

    console.log("Hello");
}

greetUser();



// ==========================================================
// FUNCTION DECLARATION vs FUNCTION EXPRESSION
// ==========================================================

// Function Declaration

greet();

function greet() {

    console.log("Hello");
}

// Works because declarations are hoisted.


// Function Expression

// hello();

const hello = function () {

    console.log("Hello");
};

// Error if called before initialization.



// ==========================================================
// IMPORTANT POINTS
// ==========================================================

// 1. Functions help reuse code.
// 2. Parameters are variables in function definition.
// 3. Arguments are actual values passed.
// 4. return immediately exits the function.
// 5. Code after return never runs.
// 6. Default parameters provide fallback values.
// 7. Rest operator (...) collects remaining arguments into an array.
// 8. Objects and arrays can be passed directly to functions.
// 9. Function declarations are hoisted.
// 10. Function expressions are not hoisted.