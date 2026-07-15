// ==========================================================
// JAVASCRIPT WHILE LOOP
// ==========================================================

// A while loop executes as long as the condition is true.

// Syntax

while (condition) {

    // Code

}



// ==========================================================
// EXAMPLE
// ==========================================================

let index = 0;

while (index <= 5) {

    console.log(index);

    index++;

}

// Output

// 0
// 1
// 2
// 3
// 4
// 5



// ==========================================================
// HOW while LOOP WORKS
// ==========================================================

// Step 1

let i = 0;

// Step 2

//Check condition

i <= 5

// true

// Step 3

//Execute loop body

console.log(i);

// Step 4

Increment

i++;

// Repeat until condition becomes false.



// ==========================================================
// while LOOP WITH ARRAY
// ==========================================================

const fruits = [

    "Apple",

    "Banana",

    "Mango",

    "Orange"

];

let i = 0;

while (i < fruits.length) {

    console.log(fruits[i]);

    i++;

}

// Output

// Apple
// Banana
// Mango
// Orange



// ==========================================================
// while LOOP WITH FUNCTION
// ==========================================================

function square(num) {

    return num * num;

}

let number = 1;

while (number <= 5) {

    console.log(square(number));

    number++;

}

// Output

// 1
// 4
// 9
// 16
// 25



// ==========================================================
// do...while LOOP
// ==========================================================

// A do...while loop executes the code first,
// then checks the condition.

// Syntax

do {

    // Code

}

while (condition);



// ==========================================================
// EXAMPLE
// ==========================================================

let score = 1;

do {

    console.log(`Score is ${score}`);

    score++;

}

while (score <= 5);

// Output

// Score is 1
// Score is 2
// Score is 3
// Score is 4
// Score is 5



// ==========================================================
// IMPORTANT DIFFERENCE
// ==========================================================

// while checks first.

let x = 10;

while (x < 5) {

    console.log(x);

    x++;

}

// Output

// Nothing



// do...while executes once before checking.

let y = 10;

do {

    console.log(y);

    y++;

}

while (y < 5);

// Output

// 10



// ==========================================================
// while vs do...while
// ==========================================================

/*

while

1. Checks condition first.
2. May execute zero times.

Example

while(false){

    console.log("Hello");

}

Output

Nothing




do...while

1. Executes first.
2. Checks condition later.
3. Executes at least once.

Example

do{

    console.log("Hello");

}

while(false);

Output

Hello

*/



// ==========================================================
// break
// ==========================================================

let count = 1;

while (count <= 10) {

    if (count == 5) {

        break;

    }

    console.log(count);

    count++;

}

// Output

// 1
// 2
// 3
// 4



// ==========================================================
// continue
// ==========================================================

let value = 1;

while (value <= 5) {

    value++;

    if (value == 3) {

        continue;

    }

    console.log(value);

}

// Output

// 2
// 4
// 5
// 6



// ==========================================================
// IMPORTANT POINTS
// ==========================================================

// 1. while checks the condition before executing.
// 2. do...while executes once before checking.
// 3. while may execute zero times.
// 4. do...while always executes at least once.
// 5. Always update the loop variable to avoid an infinite loop.
// 6. Use while when the number of iterations is unknown.
// 7. Use do...while when the code must execute at least once.
// 8. break exits the loop.
// 9. continue skips the current iteration.