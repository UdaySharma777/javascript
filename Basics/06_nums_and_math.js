
// ==========================================================
// JAVASCRIPT NUMBERS & MATH
// ==========================================================


// ==========================================================
// NUMBERS
// ==========================================================

// There are two ways to create numbers.

// 1. Primitive Number

const score = 400;

console.log(score);          // 400
console.log(typeof score);   // number


// 2. Number Object

const balance = new Number(100);

console.log(balance);
console.log(typeof balance); // object

// NOTE:
// Avoid using 'new Number()' unless specifically required.
// In most cases, use primitive numbers.


// ==========================================================
// NUMBER METHODS
// ==========================================================

// ----------------------------------------------------------
// toString()
// Converts a number into a string.
// ----------------------------------------------------------

const num = 100;

console.log(num.toString());          // "100"
console.log(num.toString().length);   // 3

// Useful when string methods are needed.


// ----------------------------------------------------------
// toFixed(n)
// Returns a string with exactly n decimal places.
// Mostly used for prices and currency.
// ----------------------------------------------------------

const price = 100;

console.log(price.toFixed(2));    // "100.00"

const value = 99.567;

console.log(value.toFixed(2));    // "99.57"



// ----------------------------------------------------------
// toPrecision(n)
// Returns a string with n significant digits.
// Used for scientific calculations or formatting.
// ----------------------------------------------------------

const number = 1123.8966;

console.log(number.toPrecision(3)); // "1.12e+3"
console.log(number.toPrecision(4)); // "1124"
console.log(number.toPrecision(5)); // "1123.9"



// ----------------------------------------------------------
// toLocaleString()
// Formats numbers according to a country's numbering system.
// ----------------------------------------------------------

const amount = 1000000;

console.log(amount.toLocaleString());
// US Format
// 1,000,000

console.log(amount.toLocaleString("en-IN"));
// Indian Format
// 10,00,000



// ==========================================================
// MATH OBJECT
// ==========================================================

// Math is a built-in object containing mathematical functions.

console.log(Math);


// ----------------------------------------------------------
// Math.abs()
// Returns the absolute (positive) value.
// ----------------------------------------------------------

console.log(Math.abs(-4));   // 4
console.log(Math.abs(4));    // 4



// ----------------------------------------------------------
// Math.round()
// Rounds to the nearest integer.
// >= .5 rounds up
// < .5 rounds down
// ----------------------------------------------------------

console.log(Math.round(4.3));   // 4
console.log(Math.round(4.5));   // 5
console.log(Math.round(4.6));   // 5



// ----------------------------------------------------------
// Math.ceil()
// Always rounds UP.
// ----------------------------------------------------------

console.log(Math.ceil(5.2));   // 6
console.log(Math.ceil(5.9));   // 6



// ----------------------------------------------------------
// Math.floor()
// Always rounds DOWN.
// ----------------------------------------------------------

console.log(Math.floor(5.2));   // 5
console.log(Math.floor(5.9));   // 5



// ==========================================================
// RANDOM NUMBERS
// ==========================================================

// Math.random() returns a random decimal number
// greater than or equal to 0
// and less than 1.

console.log(Math.random());

// Example outputs:
// 0.45678
// 0.91234
// 0.12345



// Multiply by 10

console.log(Math.random() * 10);

// Output range:
// 0 to 9.99999



// Add 1

console.log(Math.random() * 10 + 1);

// Output range:
// 1 to 10.99999



// ==========================================================
// RANDOM INTEGER IN A RANGE
// ==========================================================

// Formula:
//
// Math.floor(Math.random() * (max - min + 1)) + min
//
// This generates a random integer between
// min and max (both inclusive).

const min = 10;
const max = 20;

const randomNumber =
    Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);

// Possible outputs:
//
// 10
// 11
// 12
// ...
// 19
// 20



// ==========================================================
// FORMULA EXPLANATION
// ==========================================================

// Step 1
Math.random();
// 0 <= value < 1

// Step 2
Math.random() * (max - min + 1);

// If min = 10
// max = 20
//
// max - min + 1
//
// = 20 - 10 + 1
//
// = 11
//
// Range becomes
//
// 0 <= value < 11



// Step 3

Math.floor(Math.random() * 11);

// Now values become
//
// 0
// 1
// 2
// ...
// 10



// Step 4

Math.floor(Math.random() * 11) + 10;

// Final range:
//
// 10
// 11
// 12
// ...
// 20



// ==========================================================
// COMMONLY USED MATH METHODS
// ==========================================================

// Math.abs(x)        -> Absolute value
// Math.round(x)      -> Nearest integer
// Math.ceil(x)       -> Round upward
// Math.floor(x)      -> Round downward
// Math.max(a,b,c)    -> Largest number
// Math.min(a,b,c)    -> Smallest number
// Math.random()      -> Random decimal (0 <= x < 1)
// Math.pow(a,b)      -> a raised to power b
// Math.sqrt(x)       -> Square root



// ==========================================================
// IMPORTANT INTERVIEW POINTS
// ==========================================================

// ✔ Primitive numbers -> typeof = "number"
// ✔ new Number() -> typeof = "object"
// ✔ toFixed() returns a STRING
// ✔ toPrecision() returns a STRING
// ✔ Math is a built-in object
// ✔ Math.random() never returns 1
// ✔ Math.floor(Math.random()*(max-min+1))+min
//    is the standard formula for generating
//    a random integer within a given range.
