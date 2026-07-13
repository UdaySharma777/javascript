// ==========================================================
// JAVASCRIPT DATES
// ==========================================================

// Date is a built-in object used to work with dates and time.


// Creating Current Date

let myDate = new Date();

console.log(myDate);

// Example Output:
// 2026-07-13T18:30:00.000Z



// Different Date Formats

console.log(myDate.toString());
// Tue Jul 14 2026 00:00:00 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());
// Tue Jul 14 2026

console.log(myDate.toISOString());
// 2026-07-13T18:30:00.000Z

console.log(myDate.toJSON());
// 2026-07-13T18:30:00.000Z

console.log(myDate.toLocaleString());
// 14/7/2026, 12:00:00 am



// typeof Date

console.log(typeof myDate);

// Output:
// object



// Creating Custom Dates

// Year, Month, Day
// Month starts from 0

let date1 = new Date(2026, 0, 14);

console.log(date1.toDateString());

// Output:
// Wed Jan 14 2026


// Using Date String

let date2 = new Date("2026-01-14");

console.log(date2);

// Month starts from 1 when using string format.



// Date Timestamp

let myTimeStamp = Date.now();

console.log(myTimeStamp);

// Output:
// Milliseconds since
// January 1, 1970 (Unix Epoch)



// Timestamp of a Specific Date

let myCreatedDate = new Date("2026-01-14");

console.log(myCreatedDate.getTime());

// Returns milliseconds from
// January 1, 1970



// Convert Milliseconds to Seconds

console.log(Math.floor(Date.now() / 1000));

// Removes decimal part.



// Getting Individual Parts of Date

let newDate = new Date();

console.log(newDate);

console.log(newDate.getDate());
// Day of month
// 1 - 31

console.log(newDate.getDay());
// Day of week
// 0 = Sunday
// 1 = Monday
// ...
// 6 = Saturday

console.log(newDate.getMonth());
// Month
// 0 = January
// 1 = February
// ...
// 11 = December

console.log(newDate.getFullYear());
// Current year

console.log(newDate.getHours());
// Current hour

console.log(newDate.getMinutes());
// Current minute

console.log(newDate.getSeconds());
// Current second



// toLocaleString()

console.log(newDate.toLocaleString());

// Formats date according to local region.



// Custom Formatting

console.log(
    newDate.toLocaleString('default', {
        weekday: "long"
    })
);

// Output:
// Monday
// Tuesday
// Wednesday
// etc.



// More Formatting Options

console.log(
    newDate.toLocaleString('default', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    })
);

// Example Output:
// Tuesday, July 14, 2026



// Common Date Methods

// new Date()              -> Current Date & Time
// Date.now()              -> Current timestamp (milliseconds)
// getTime()               -> Timestamp of a date
// getDate()               -> Day of month
// getDay()                -> Day of week (0-6)
// getMonth()              -> Month (0-11)
// getFullYear()           -> Year
// getHours()              -> Hour
// getMinutes()            -> Minutes
// getSeconds()            -> Seconds
// toString()              -> Full date string
// toDateString()          -> Date only
// toISOString()           -> ISO format
// toJSON()                -> JSON format
// toLocaleString()        -> Local formatted date



// Important Points

// 1. Date is an object.
// 2. typeof new Date() returns "object".
// 3. Months are zero-based when using numeric constructor.
//    January = 0
//    December = 11
// 4. Months are one-based when using string format.
//    "2026-01-14" means January 14, 2026.
// 5. Date.now() returns milliseconds.
// 6. Divide by 1000 to convert milliseconds into seconds.
