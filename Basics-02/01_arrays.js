
// ==========================================================
// JAVASCRIPT ARRAYS
// ==========================================================

// Arrays are used to store multiple values in a single variable.

// Arrays are objects.

const arr1 = [1, 2, 3, 4, 5];

console.log(typeof arr1);     // object
console.log(Array.isArray(arr1)); // true



// Creating Arrays

const arr2 = [10, 20, 30];

const arr3 = new Array(1, 2, 3, 4);

console.log(arr2);
console.log(arr3);



// Arrays can store different data types.

const mixedArray = [
    1,
    true,
    "Uday",
    null,
    undefined
];

console.log(mixedArray);



// ==========================================================
// ARRAY METHODS
// ==========================================================


// push()

// Adds element at the END of array.

const arr = [1, 2, 3];

arr.push(4);

console.log(arr);

// Output:
// [1,2,3,4]



// pop()

// Removes last element.

arr.pop();

console.log(arr);

// Output:
// [1,2,3]



// unshift()

// Adds element at the BEGINNING.

arr.unshift(0);

console.log(arr);

// Output:
// [0,1,2,3]



// shift()

// Removes first element.

arr.shift();

console.log(arr);

// Output:
// [1,2,3]



// ==========================================================
// join()
// ==========================================================

// Converts array into a string.

const nums = [1, 2, 3];

const newArr = nums.join();

console.log(newArr);

// Output:
// "1,2,3"

console.log(typeof nums);

// object

console.log(typeof newArr);

// string



// ==========================================================
// slice()
// ==========================================================

// Returns a copy of selected elements.
//
// Does NOT modify original array.
//
// Ending index is NOT included.

const myArr = [1, 2, 3, 4];

console.log("Original :", myArr);

const part = myArr.slice(1, 3);

console.log(part);

// Output:
// [2,3]

console.log(myArr);

// Output:
// [1,2,3,4]



// ==========================================================
// splice()
// ==========================================================

// Removes elements from original array.
//
// Original array IS modified.
//
// Ending index IS included.

const myArr2 = [1, 2, 3, 4];

console.log("Original :", myArr2);

const removed = myArr2.splice(1, 3);

console.log(removed);

// Output:
// [2,3,4]

console.log(myArr2);

// Output:
// [1]



// ==========================================================
// slice() vs splice()
// ==========================================================

const demo = [1, 2, 3, 4];

console.log("A :", demo);

const s1 = demo.slice(1, 3);

console.log(s1);

// [2,3]

console.log("After slice :", demo);

// [1,2,3,4]


const s2 = demo.splice(1, 3);

console.log(s2);

// [2,3,4]

console.log("After splice :", demo);

// [1]



// ==========================================================
// Difference Between slice() and splice()
// ==========================================================

/*

slice()

1. Does NOT modify original array.
2. Ending index is NOT included.
3. Returns copied elements.

Example:

[1,2,3,4].slice(1,3)

Result:

[2,3]

Original array remains same.



splice()

1. Modifies original array.
2. Ending index is included.
3. Removes elements from original array.

Example:

[1,2,3,4].splice(1,3)

Result:

[2,3,4]

Original becomes:

[1]

*/



// ==========================================================
// Common Array Methods
// ==========================================================

// push()          -> Add at end
// pop()           -> Remove last
// unshift()       -> Add at beginning
// shift()         -> Remove first
// join()          -> Convert array to string
// slice()         -> Copy portion of array
// splice()        -> Remove/Insert elements



// ==========================================================
// Important Points
// ==========================================================

// 1. Arrays are objects.
// 2. Arrays can store different data types.
// 3. Arrays are zero-indexed.
// 4. push() and pop() are faster than unshift() and shift()
//    because unshift()/shift() move all existing elements.
// 5. join() returns a string.
// 6. slice() does not modify the original array.
// 7. splice() modifies the original array.