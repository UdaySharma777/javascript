// ==========================================================
// JAVASCRIPT ARRAY METHODS (PART 2)
// ==========================================================


// Creating Arrays

const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Superman", "Batman", "Flash"];



// ==========================================================
// push()
// ==========================================================

// push() adds an element at the end.
//
// If you push one array into another,
// the entire array becomes a single element.

marvelHeroes.push(dcHeroes);

console.log(marvelHeroes);

// Output:
//
// [
//   "Thor",
//   "Ironman",
//   "Spiderman",
//   ["Superman","Batman","Flash"]
// ]

// Length becomes 4 because the second array
// is added as one element.


// ==========================================================
// concat()
// ==========================================================

// concat() joins two arrays.
//
// It returns a NEW array.
// Original arrays are not modified.

const marvel = ["Thor", "Ironman"];
const dc = ["Batman", "Flash"];

const allHeroes = marvel.concat(dc);

console.log(allHeroes);

// Output:
//
// ["Thor","Ironman","Batman","Flash"]


// ==========================================================
// Spread Operator (...)
// ==========================================================

// Spread expands elements individually.

const allNewHeroes = [...marvel, ...dc];

console.log(allNewHeroes);

// Output:
//
// ["Thor","Ironman","Batman","Flash"]


// Spread can combine multiple arrays.

const a = [1,2];
const b = [3,4];
const c = [5,6];

console.log([...a, ...b, ...c]);

// Output:
//
// [1,2,3,4,5,6]


// ==========================================================
// flat()
// ==========================================================

// Removes nested arrays.
//
// flat(depth)

const anotherArray = [
    1,
    2,
    3,
    [4,5,6],
    [7,8,[9,10]]
];

console.log(anotherArray.flat(1));

// Output:
//
// [1,2,3,4,5,6,7,8,[9,10]]

console.log(anotherArray.flat(2));

// Output:
//
// [1,2,3,4,5,6,7,8,9,10]

console.log(anotherArray.flat(Infinity));

// Flattens every level.


// ==========================================================
// Array.isArray()
// ==========================================================

// Checks whether a value is an array.

console.log(Array.isArray("Uday"));

// false

console.log(Array.isArray([1,2,3]));

// true


// ==========================================================
// Array.from()
// ==========================================================

// Converts iterable objects into arrays.

console.log(Array.from("Uday"));

// Output:
//
// ['U','d','a','y']


// With Objects

console.log(Array.from({name:"Uday"}));

// Output:
//
// []

// Reason:
//
// JavaScript doesn't know whether to convert
// object keys or object values.
//
// Use Object.keys() or Object.values() instead.

const person = {
    name: "Uday",
    age: 22
};

console.log(Object.keys(person));

// ["name","age"]

console.log(Object.values(person));

// ["Uday",22]


// ==========================================================
// Array.of()
// ==========================================================

// Creates an array from given values.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

// Output:
//
// [100,200,300]


// ==========================================================
// concat() vs push()
// ==========================================================

/*

push()

Adds one element.

If the element is an array,
that entire array becomes one element.

Example:

arr1.push(arr2);

Result:

[
 1,
 2,
 [3,4]
]


concat()

Joins arrays.

Returns a new array.

Example:

arr1.concat(arr2);

Result:

[
 1,
 2,
 3,
 4
]

*/


// ==========================================================
// Common Array Methods
// ==========================================================

// push()              -> Add at end
// pop()               -> Remove last
// shift()             -> Remove first
// unshift()           -> Add at beginning
// concat()            -> Join arrays
// spread (...)        -> Expand arrays/elements
// slice()             -> Copy part of array
// splice()            -> Modify original array
// flat()              -> Remove nesting
// Array.isArray()     -> Check if value is array
// Array.from()        -> Convert iterable to array
// Array.of()          -> Create array from values


// ==========================================================
// Important Points
// ==========================================================

// 1. push(array) adds the whole array as one element.
// 2. concat() returns a new merged array.
// 3. Spread operator (...) is the modern way to merge arrays.
// 4. flat() removes nested arrays.
// 5. flat(Infinity) removes all nesting levels.
// 6. Array.isArray() checks if a value is an array.
// 7. Array.from("Uday") creates ['U','d','a','y'].
// 8. Array.from(object) returns [] unless the object is iterable.
// 9. Array.of() creates an array from individual values.
