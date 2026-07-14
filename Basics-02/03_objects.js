// ==========================================================
// JAVASCRIPT OBJECTS
// ==========================================================


// Objects store data in key-value pairs.

// Syntax

const person = {
    name: "Uday",
    age: 22
};



// ==========================================================
// OBJECT LITERAL
// ==========================================================

// The most common way to create an object.

const jsUser = {
    name: "Uday",
    age: 22,
    email: "uday@gmail.com"
};



// ==========================================================
// SINGLETON OBJECT
// ==========================================================

// Singleton objects are created using constructors.

const obj = new Object();

// Object literals do NOT create singleton objects.


// ==========================================================
// DATA TYPES INSIDE OBJECT
// ==========================================================

const mySym = Symbol("key1");

const user = {

    name: "Uday",                    // String

    fullName: "Uday Sharma",         // String

    age: 22,                         // Number

    isLoggedIn: false,               // Boolean

    email: "abc@gmail.com",          // String

    lastLoginDays: ["Monday","Saturday"], // Array

    [mySym]: "myKey1"                // Symbol
};



// ==========================================================
// ACCESSING OBJECT VALUES
// ==========================================================

// Dot Notation

console.log(user.name);

// Uday


// Bracket Notation

console.log(user["email"]);

// abc@gmail.com


// Bracket notation is required when:

// 1. Property name contains spaces.

const person2 = {

    "full name": "Uday Sharma"
};

console.log(person2["full name"]);


// 2. Property name is stored in a variable.

// 3. Property is a Symbol.

console.log(user[mySym]);



// ==========================================================
// SYMBOL AS OBJECT KEY
// ==========================================================

// Wrong

const sym = Symbol("id");

const obj1 = {

    sym: "123"
};

console.log(typeof obj1.sym);

// string


// Correct

const sym2 = Symbol("id");

const obj2 = {

    [sym2]: "123"
};

console.log(obj2[sym2]);

// 123



// ==========================================================
// MODIFYING OBJECT VALUES
// ==========================================================

user.email = "newmail@gmail.com";

console.log(user.email);



// ==========================================================
// Object.freeze()
// ==========================================================

// Prevents changes to an object.

Object.freeze(user);

user.email = "another@gmail.com";

console.log(user.email);

// Still prints:
// newmail@gmail.com

// Cannot

// Change properties
// Add properties
// Delete properties



// ==========================================================
// ADDING METHODS TO OBJECT
// ==========================================================

// A function inside an object is called a METHOD.

const student = {

    name: "Uday"
};

student.greeting = function () {

    console.log("Hello JS User");
};

student.greeting();

// Output

// Hello JS User



// ==========================================================
// this Keyword
// ==========================================================

// 'this' refers to the current object.

student.greetingTwo = function () {

    console.log(`Hello ${this.name}`);
};

student.greetingTwo();

// Output

// Hello Uday


// Here,

// this.name

// is same as

// student.name



// ==========================================================
// WHY console.log(student.greeting()) PRINTS undefined
// ==========================================================

student.greeting = function () {

    console.log("Hello");
};

console.log(student.greeting());

// Output

// Hello
// undefined

// Reason:
//
// greeting() already prints "Hello".
//
// The function does not return anything.
//
// Every function without a return statement
// automatically returns undefined.


// Better way

student.greeting();



// ==========================================================
// COMMON OBJECT METHODS
// ==========================================================

// Object.keys(obj)
// Returns array of keys.

console.log(Object.keys(student));



// Object.values(obj)
// Returns array of values.

console.log(Object.values(student));



// Object.entries(obj)
// Returns key-value pairs.

console.log(Object.entries(student));



// hasOwnProperty()

console.log(student.hasOwnProperty("name"));

// true



// ==========================================================
// IMPORTANT POINTS
// ==========================================================

// 1. Objects store data as key-value pairs.
// 2. Arrays and functions can be stored inside objects.
// 3. Dot notation is simple but doesn't work for symbols
//    or keys containing spaces.
// 4. Bracket notation works with strings, variables,
//    and Symbol keys.
// 5. Use [] to store Symbol as an object key.
// 6. Object.freeze() makes an object immutable.
// 7. Methods are functions inside objects.
// 8. 'this' refers to the current object.
// 9. Functions without a return statement return undefined.
// 10. Objects are reference types.
