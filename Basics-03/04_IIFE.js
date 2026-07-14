// ==========================================================
// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// ==========================================================


// IIFE = Immediately Invoked Function Expression.

// It is a function that executes immediately
// after it is defined.


// Syntax

(function () {

    console.log("Hello");

})();



// ==========================================================
// WHY USE IIFE?
// ==========================================================

// 1. Execute code immediately.
// 2. Avoid polluting the global scope.
// 3. Create a private scope for variables.
// 4. Commonly used for initialization code.


// ==========================================================
// NAMED IIFE
// ==========================================================

(function chai() {

    console.log("DB CONNECTED");

})();

// Output

// DB CONNECTED

// 'chai' is the function name.


// ==========================================================
// UNNAMED (ANONYMOUS) IIFE
// ==========================================================

(function () {

    console.log("Hello");

})();



// ==========================================================
// ARROW FUNCTION IIFE
// ==========================================================

(() => {

    console.log("Hello");

})();



// ==========================================================
// IIFE WITH PARAMETERS
// ==========================================================

((name) => {

    console.log(`DB CONNECTED ${name}`);

})("Uday");

// Output

// DB CONNECTED Uday



// ==========================================================
// WHY ARE PARENTHESES USED?
// ==========================================================

// Normal Function

function greet() {

    console.log("Hello");

}

// Function is only defined.
// It does not execute automatically.


// IIFE

(function greet() {

    console.log("Hello");

})();

// First () treats it as a function expression.
// Second () immediately calls it.


// ==========================================================
// WHY IS ';' IMPORTANT?
// ==========================================================

// Every IIFE should end with a semicolon.

(function () {

    console.log("First IIFE");

})();

(function () {

    console.log("Second IIFE");

})();

// Without the semicolon after the first IIFE,
// JavaScript may treat the second IIFE as if it
// is trying to call the result of the first one,
// causing a syntax error.


// ==========================================================
// NAMED vs UNNAMED IIFE
// ==========================================================

/*

Named IIFE

(function chai(){

    console.log("Hello");

})();



Anonymous IIFE

(function(){

    console.log("Hello");

})();



Arrow IIFE

(() => {

    console.log("Hello");

})();

*/


// ==========================================================
// IMPORTANT POINTS
// ==========================================================

// 1. IIFE stands for Immediately Invoked Function Expression.
// 2. It executes immediately after being defined.
// 3. It helps avoid global scope pollution.
// 4. Wrap the function in () to make it an expression.
// 5. The second () invokes the function.
// 6. Multiple IIFEs should be separated with a semicolon.
// 7. IIFEs can be named, anonymous, or arrow functions.
// 8. IIFEs can accept arguments like normal functions.