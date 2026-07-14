// ==========================================================
// JAVASCRIPT SCOPE
// ==========================================================


// Scope determines where variables can be accessed.


// ==========================================================
// GLOBAL SCOPE
// ==========================================================

let a = 100;
const b = 200;
var c = 300;

console.log(a);
console.log(b);
console.log(c);

// Global variables can be accessed anywhere.


// ==========================================================
// BLOCK SCOPE
// ==========================================================

if (true) {

    let x = 10;

    const y = 20;

    var z = 30;

    console.log(x);
    console.log(y);
    console.log(z);
}

// console.log(x); // Error
// console.log(y); // Error

console.log(z);

// Output

// 30


// let and const are block scoped.

// var is NOT block scoped.


// ==========================================================
// EXAMPLE
// ==========================================================

let a = 300;

if (true) {

    let a = 10;

    const b = 20;

    var c = 30;

    console.log(a);

}

// Output

// 10

console.log(a);

// Output

// 300

console.log(c);

// Output

// 30


// The inner variable 'a' exists only inside the block.


// ==========================================================
// NESTED FUNCTIONS
// ==========================================================

function one() {

    const username = "Uday";

    function two() {

        const website = "YouTube";

        console.log(username);

    }

    two();

}

one();

// Output

// Uday


// Inner functions can access variables
// of their outer functions.


// ==========================================================
// OUTER FUNCTION CANNOT ACCESS INNER VARIABLES
// ==========================================================

function outer() {

    const username = "Uday";

    function inner() {

        const website = "YouTube";

        console.log(username);

    }

    // console.log(website); // Error

    inner();

}

outer();


// 'website' exists only inside inner().


// ==========================================================
// LEXICAL SCOPE
// ==========================================================

// JavaScript uses Lexical Scope.

// Inner functions can access:

// Their own variables.
// Parent function variables.
// Global variables.


// Example

let country = "India";

function first() {

    let state = "Rajasthan";

    function second() {

        let city = "Jaipur";

        console.log(country);

        console.log(state);

        console.log(city);

    }

    second();

}

first();


// second() can access:

// country
// state
// city


// first() cannot access city.


// ==========================================================
// FUNCTION SCOPE
// ==========================================================

function demo() {

    let x = 10;

    console.log(x);

}

demo();

// console.log(x); // Error


// Variables declared inside a function
// exist only inside that function.


// ==========================================================
// IMPORTANT POINTS
// ==========================================================

// 1. Scope determines where variables can be accessed.
// 2. Global variables are accessible everywhere.
// 3. let and const are block scoped.
// 4. var is function scoped and ignores block scope.
// 5. Avoid using var in modern JavaScript.
// 6. Inner functions can access outer variables.
// 7. Outer functions cannot access inner variables.
// 8. This behavior is called Lexical Scope.
// 9. Each pair of {} creates a new block scope.