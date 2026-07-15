// ==========================================================
// JAVASCRIPT SWITCH STATEMENT
// ==========================================================


// The switch statement is used when you want to compare
// one value against multiple possible values.

// It is often cleaner than writing many else-if statements.


// ==========================================================
// SYNTAX
// ==========================================================

switch (expression) {

    case value1:

        // Code

        break;

    case value2:

        // Code

        break;

    default:

        // Code

}



// ==========================================================
// EXAMPLE
// ==========================================================

const month = 3;

switch (month) {

    case 1:

        console.log("January");

        break;

    case 2:

        console.log("February");

        break;

    case 3:

        console.log("March");

        break;

    case 4:

        console.log("April");

        break;

    default:

        console.log("Invalid Month");

        break;

}

// Output

// March



// ==========================================================
// HOW switch WORKS
// ==========================================================

// Step 1
// Evaluate the expression.

// switch (month)

// month = 3



// Step 2
// Compare with each case.

// case 1   // No

// case 2   // No

// case 3   // Yes



// Step 3
// Execute matching block.

// console.log("March");



// Step 4
// break stops the switch.

// break;



// ==========================================================
// WHY break IS IMPORTANT
// ==========================================================

// Without break

let day = 2;

switch (day) {

    case 1:

        console.log("Monday");

    case 2:

        console.log("Tuesday");

    case 3:

        console.log("Wednesday");

    default:

        console.log("Invalid");

}

// Output

// Tuesday
// Wednesday
// Invalid

// This is called FALL THROUGH.


// ==========================================================
// WITH break
// ==========================================================

const day2 = 2;

switch (day2) {

    case 1:

        console.log("Monday");

        break;

    case 2:

        console.log("Tuesday");

        break;

    case 3:

        console.log("Wednesday");

        break;

    default:

        console.log("Invalid");

        break;

}

// Output

// Tuesday



// ==========================================================
// DEFAULT CASE
// ==========================================================

// default executes if no case matches.

const number = 10;

switch (number) {

    case 1:

        console.log("One");

        break;

    case 2:

        console.log("Two");

        break;

    default:

        console.log("Not Found");

}

// Output

// Not Found



// ==========================================================
// SWITCH WITH STRINGS
// ==========================================================

const browser = "Chrome";

switch (browser) {

    case "Chrome":

        console.log("Google Chrome");

        break;

    case "Firefox":

        console.log("Mozilla Firefox");

        break;

    default:

        console.log("Unknown Browser");

}

// Output

// Google Chrome



// ==========================================================
// switch vs if...else
// ==========================================================

/*

Use switch when:

- Comparing one variable
- Against many fixed values


Use if...else when:

- Comparing ranges

Example

marks > 90

marks < 50

temperature >= 40

These are better with if...else.

*/


// ==========================================================
// IMPORTANT POINTS
// ==========================================================

// 1. switch compares one expression with multiple cases.
// 2. case values are checked using strict equality (===).
// 3. break exits the switch statement.
// 4. Omitting break causes fall-through.
// 5. default executes when no case matches.
// 6. switch works well for fixed values like months,
//    days, menu options, etc.
// 7. Use if...else for ranges or complex conditions.
