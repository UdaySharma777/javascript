```javascript
// ==========================================================
// JAVASCRIPT DATA TYPES
// ==========================================================

// JavaScript has 2 categories of data types:
//
// 1. Primitive (Stored by Value)
// 2. Non-Primitive / Reference (Stored by Reference)


// ==========================================================
// 1. PRIMITIVE DATA TYPES (7 Types)
// ==========================================================

// 1. String
let name = "Uday";
console.log(typeof name);      // string

// 2. Number
let age = 22;
console.log(typeof age);       // number

// 3. Boolean
let isLoggedIn = true;
console.log(typeof isLoggedIn); // boolean

// 4. Undefined
let city;
console.log(typeof city);      // undefined
// Variable is declared but no value is assigned.

// 5. Null
let value = null;
console.log(typeof value);     // object
// NOTE:
// null is actually a primitive data type.
// typeof null returns "object" because of an old JavaScript bug.
// This behavior is kept for backward compatibility.

// 6. Symbol
let id = Symbol("123");
console.log(typeof id);        // symbol
// Every Symbol is unique.

let id1 = Symbol("123");
let id2 = Symbol("123");

console.log(id1 == id2);       // false

// 7. BigInt
let bigNumber = 12345678901234567890n;
console.log(typeof bigNumber); // bigint
// Used for very large integers.


// ==========================================================
// NON-PRIMITIVE / REFERENCE DATA TYPES
// ==========================================================

// 1. Array

const heroes = ["IronMan", "Hulk", "Thor"];

console.log(typeof heroes);        // object
console.log(Array.isArray(heroes)); // true

// Arrays are special kinds of objects.


// 2. Object

const person = {
    name: "Uday",
    age: 22
};

console.log(typeof person); // object


// 3. Function

const greet = function () {
    console.log("Hello");
};

console.log(typeof greet); // function

// Functions are technically objects.
// JavaScript gives them a special typeof value: "function".


// ==========================================================
// typeof RETURN VALUES
// ==========================================================

// String        -> "string"
// Number        -> "number"
// Boolean       -> "boolean"
// Undefined     -> "undefined"
// Null          -> "object" (JavaScript bug)
// Symbol        -> "symbol"
// BigInt        -> "bigint"
// Array         -> "object"
// Object        -> "object"
// Function      -> "function"


// ==========================================================
// PRIMITIVE vs REFERENCE
// ==========================================================

// Primitive values are copied by VALUE.

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// 'a' does not change because numbers are copied by value.


// Reference values are copied by REFERENCE.

let obj1 = {
    name: "Uday"
};

let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name); // Rahul
console.log(obj2.name); // Rahul

// Both variables point to the same object in memory.


// ==========================================================
// IMPORTANT INTERVIEW POINTS
// ==========================================================

// ✔ Primitive types are immutable.
// ✔ Objects, Arrays, and Functions are mutable.
// ✔ Arrays are objects.
// ✔ Functions are objects with callable behavior.
// ✔ typeof null === "object" is a historical JavaScript bug.
// ✔ Always use Array.isArray() to check for arrays.
// ✔ Use === instead of == to avoid type coercion.
```
