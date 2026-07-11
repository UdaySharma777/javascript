"use strict"; // treat all js cide as newer version

// alert(3 + 3) // will work on browser not in terminal

console.log(3+3);

// Primitive Data Types

// Number
// Used for integers and decimal numbers.
// Safe integer range: -(2^53 - 1) to (2^53 - 1)

// BigInt
// Used for very large integers beyond Number's safe range.

// String
// Text enclosed in "", '', or `` (template literals).

// Boolean
// true or false

// Null
// Represents an intentional absence of a value.
// It is a standalone value assigned by the programmer.

// Undefined
// A variable has been declared but has not been assigned a value.

// Symbol
// Used to create unique identifiers.

// Example:

let age = 20;                     // Number
let big = 12345678901234567890n;  // BigInt
let name = "Uday";                // String
let isLoggedIn = true;            // Boolean
let score = null;                 // Null
let city;                         // Undefined
let id = Symbol("id");            // Symbol
// object

console.log(typeof undefined)