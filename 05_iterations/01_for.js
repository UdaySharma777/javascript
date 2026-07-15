// ==========================================================
// JAVASCRIPT FOR LOOP
// ==========================================================

// A for loop is used when we know how many times
// we want to repeat a block of code.


// ==========================================================
// SYNTAX
// ==========================================================

for (initialization; condition; increment/decrement) {

    // Code

}



// Example

for (let i = 0; i < 5; i++) {

    console.log(i);

}

// Output

// 0
// 1
// 2
// 3
// 4



// ==========================================================
// HOW A FOR LOOP WORKS
// ==========================================================

// Example

for (let i = 0; i < 3; i++) {

    console.log(i);

}

// Step 1

let i = 0;

// Step 2

i < 3

// true

// Step 3

console.log(i);

// Output

// 0

// Step 4

i++

// i becomes 1

// Repeat until condition becomes false.



// ==========================================================
// if INSIDE A LOOP
// ==========================================================

for (let i = 0; i < 10; i++) {

    if (i == 5) {

        console.log("Oh Yeah!");

    }

    console.log(i);

}

// Output

// 0
// 1
// 2
// 3
// 4
// Oh Yeah!
// 5
// 6
// 7
// 8
// 9



// ==========================================================
// NESTED FOR LOOP
// ==========================================================

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log(i, j);

    }

}



// ==========================================================
// MULTIPLICATION TABLE
// ==========================================================

for (let i = 1; i <= 5; i++) {

    console.log(`Table of ${i}`);

    for (let j = 1; j <= 10; j++) {

        console.log(`${i} x ${j} = ${i*j}`);

    }

}



// ==========================================================
// FOR LOOP WITH ARRAYS
// ==========================================================

const fruits = [

    "Apple",

    "Banana",

    "Mango",

    "Orange"

];

for (let i = 0; i < fruits.length; i++) {

    console.log(fruits[i]);

}

// Output

// Apple
// Banana
// Mango
// Orange



// Printing Index

for (let i = 0; i < fruits.length; i++) {

    console.log(i, fruits[i]);

}



// ==========================================================
// ARRAY OF OBJECTS
// ==========================================================

const students = [

    {

        name: "Uday",

        age: 22

    },

    {

        name: "Rahul",

        age: 21

    },

    {

        name: "Aman",

        age: 20

    }

];

for (let i = 0; i < students.length; i++) {

    console.log(

        students[i].name,

        students[i].age

    );

}



// Output

// Uday 22
// Rahul 21
// Aman 20



// ==========================================================
// FOR LOOP WITH OBJECTS
// ==========================================================

// Objects do not have a length property,
// so we first get their keys.

const person = {

    name: "Uday",

    age: 22,

    city: "Jaipur"

};

const keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {

    console.log(

        keys[i],

        person[keys[i]]

    );

}

// Output

// name Uday
// age 22
// city Jaipur



// ==========================================================
// FOR LOOP WITH FUNCTIONS
// ==========================================================

function square(number) {

    return number * number;

}

for (let i = 1; i <= 5; i++) {

    console.log(

        square(i)

    );

}

// Output

// 1
// 4
// 9
// 16
// 25



// ==========================================================
// BREAK
// ==========================================================

// Stops the loop immediately.

for (let i = 0; i < 10; i++) {

    if (i == 5) {

        break;

    }

    console.log(i);

}

// Output

// 0
// 1
// 2
// 3
// 4



// ==========================================================
// CONTINUE
// ==========================================================

// Skips current iteration.

for (let i = 0; i < 10; i++) {

    if (i == 5) {

        continue;

    }

    console.log(i);

}

// Output

// 0
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9



// ==========================================================
// IMPORTANT POINTS
// ==========================================================

// 1. for loops are used when the number of iterations is known.
// 2. initialization runs only once.
// 3. condition is checked before every iteration.
// 4. increment/decrement runs after every iteration.
// 5. Arrays are commonly traversed using a for loop.
// 6. Objects don't have a length property.
// 7. Use Object.keys() to iterate over objects.
// 8. Functions can be called inside loops.
// 9. break exits the loop completely.
// 10. continue skips only the current iteration.


