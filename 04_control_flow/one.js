// ==========================================================
// JAVASCRIPT CONDITIONAL STATEMENTS
// ==========================================================


// Conditional statements execute different blocks
// of code depending on whether a condition is true or false.



// ==========================================================
// if STATEMENT
// ==========================================================

const isUserLoggedIn = true;

if (isUserLoggedIn) {

    console.log("User is logged in");

}



// Syntax

if (condition) {

    // Code executes if condition is true

}



// ==========================================================
// if...else
// ==========================================================

const temperature = 41;

if (temperature < 50) {

    console.log("Temperature is less than 50");

}

else {

    console.log("Temperature is 50 or greater");

}



// ==========================================================
// COMPARISON OPERATORS
// ==========================================================

// ==   Equal (checks value only)
// ===  Strict Equal (checks value and data type)
// !=   Not Equal
// !==  Strict Not Equal
// >    Greater Than
// <    Less Than
// >=   Greater Than or Equal
// <=   Less Than or Equal



// Example

const marks = 80;

if (marks >= 50) {

    console.log("Pass");

}



// ==========================================================
// else if
// ==========================================================

const balance = 1000;

if (balance < 500) {

    console.log("Less than 500");

}

else if (balance < 750) {

    console.log("Less than 750");

}

else if (balance < 900) {

    console.log("Less than 900");

}

else {

    console.log("1000 or greater");

}



// ==========================================================
// SHORT HAND if
// ==========================================================

const amount = 1000;

if (amount > 500) console.log("Test");

// Only use this for a single statement.


// Multiple statements

if (amount > 500) {

    console.log("Allowed");

    console.log("Proceed");

}



// ==========================================================
// LOGICAL OPERATORS
// ==========================================================


// AND (&&)

// Returns true only if ALL conditions are true.

const userLoggedIn = true;

const debitCard = true;

if (userLoggedIn && debitCard) {

    console.log("Allowed to buy course");

}



// OR (||)

// Returns true if ANY one condition is true.

const loggedInFromGoogle = false;

const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {

    console.log("User Logged In");

}



// NOT (!)

// Reverses a boolean value.

const isAdmin = false;

if (!isAdmin) {

    console.log("Access Denied");

}



// ==========================================================
// BOOLEAN VALUES
// ==========================================================

const isLoggedIn = true;

if (isLoggedIn) {

    console.log("Welcome");

}

else {

    console.log("Please Login");

}



// ==========================================================
// NESTED if
// ==========================================================

const age = 20;

const hasLicense = true;

if (age >= 18) {

    if (hasLicense) {

        console.log("You can drive");

    }

}



// ==========================================================
// IMPORTANT POINTS
// ==========================================================

// 1. if executes only when the condition is true.
// 2. else executes when the if condition is false.
// 3. else if checks multiple conditions.
// 4. Only one block from an if-else-if ladder executes.
// 5. && means ALL conditions must be true.
// 6. || means ANY one condition can be true.
// 7. ! reverses true to false and false to true.
// 8. Prefer === instead of ==.
// 9. Use braces {} even for a single statement to improve readability.
// 10. Conditions must evaluate to true or false.





