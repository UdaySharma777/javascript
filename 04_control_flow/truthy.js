// ==========================================================
// JAVASCRIPT TRUTHY & FALSY VALUES
// ==========================================================

// Every value in JavaScript is either Truthy or Falsy
// when used in a condition.


// ==========================================================
// TRUTHY VALUES
// ==========================================================

// These values behave like true.

// true
// "0"
// "false"
// " " (space)
// []
// {}
// function(){}


// Example

const userEmail = "u@uday.ai";

if (userEmail) {

    console.log("Got User Email");

}

else {

    console.log("Don't have User Email");

}

// Output

// Got User Email



// ==========================================================
// FALSY VALUES
// ==========================================================

// These values behave like false.

// false
// 0
// -0
// 0n (BigInt Zero)
// ""
// null
// undefined
// NaN


const email = "";

if (email) {

    console.log("Email Found");

}

else {

    console.log("Email Not Found");

}



// ==========================================================
// EMPTY ARRAY
// ==========================================================

// Empty arrays are Truthy.

const userArray = [];

if (userArray) {

    console.log("Runs");

}

// Output

// Runs


// To check whether an array is empty

if (userArray.length === 0) {

    console.log("Array is Empty");

}

else {

    console.log("Array is Not Empty");

}



// ==========================================================
// EMPTY OBJECT
// ==========================================================

// Empty objects are also Truthy.

const userObject = {};

if (userObject) {

    console.log("Runs");

}

// Output

// Runs


// To check whether an object is empty

if (Object.keys(userObject).length === 0) {

    console.log("Object is Empty");

}

else {

    console.log("Object is Not Empty");

}



// Object.keys()

const student = {

    name: "Uday",

    age: 22

};

console.log(Object.keys(student));

// Output

// ["name","age"]


// Object.values()

console.log(Object.values(student));

// Output

// ["Uday",22]


// Object.entries()

console.log(Object.entries(student));

// Output

// [
//   ["name","Uday"],
//   ["age",22]
// ]



// ==========================================================
// NULLISH COALESCING OPERATOR (??)
// ==========================================================

// Returns the first value unless it is
// null or undefined.

let val1;

val1 = 5 ?? 10;

console.log(val1);

// 5


val1 = null ?? 10;

console.log(val1);

// 10


val1 = undefined ?? 20;

console.log(val1);

// 20


val1 = null ?? undefined ?? 30;

console.log(val1);

// 30



// ==========================================================
// ?? vs ||
// ==========================================================

// OR Operator

console.log(0 || 100);

// 100

// Because 0 is a falsy value.



// Nullish Operator

console.log(0 ?? 100);

// 0

// Because 0 is neither null nor undefined.



console.log("" || "Hello");

// Hello



console.log("" ?? "Hello");

// ""



console.log(false || true);

// true



console.log(false ?? true);

// false



// ==========================================================
// TERNARY OPERATOR
// ==========================================================

// Syntax

condition ? expression1 : expression2;


// Example

const iceTeaPrice = 100;

iceTeaPrice <= 80

?

console.log("Less than 80")

:

console.log("More than 80");

// Output

// More than 80



// Same using if...else

if (iceTeaPrice <= 80) {

    console.log("Less than 80");

}

else {

    console.log("More than 80");

}



// ==========================================================
// IMPORTANT INTERVIEW QUESTIONS
// ==========================================================

// Is [] Truthy?

console.log(Boolean([]));

// true


// Is {} Truthy?

console.log(Boolean({}));

// true


// Is "" Truthy?

console.log(Boolean(""));

// false


// Is " " Truthy?

console.log(Boolean(" "));

// true


// Is 0 Truthy?

console.log(Boolean(0));

// false


// Is "0" Truthy?

console.log(Boolean("0"));

// true


// ==========================================================
// IMPORTANT POINTS
// ==========================================================

// 1. Every JavaScript value is either Truthy or Falsy.
// 2. Empty arrays [] are Truthy.
// 3. Empty objects {} are Truthy.
// 4. Empty strings "" are Falsy.
// 5. Check empty arrays using array.length === 0.
// 6. Check empty objects using Object.keys(obj).length === 0.
// 7. ?? only checks for null and undefined.
// 8. || checks all falsy values.
// 9. Use ?? when 0, false, or "" are valid values.
// 10. The ternary operator is a shorthand for if...else.