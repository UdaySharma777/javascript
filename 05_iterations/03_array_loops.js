// ==========================================================
// JAVASCRIPT ITERATION METHODS
// ==========================================================



// ==========================================================
// for...of LOOP
// ==========================================================

// Used to iterate over iterable objects.
//
// Works with:
// Arrays
// Strings
// Maps
// Sets

const numbers = [1,2,3,4,5];

for (const value of numbers) {

    console.log(value);

}

// Output

// 1
// 2
// 3
// 4
// 5



// ==========================================================
// for...of WITH STRING
// ==========================================================

const name = "Uday";

for (const ch of name) {

    console.log(ch);

}

// Output

// U
// d
// a
// y



// ==========================================================
// MAP
// ==========================================================

// Map stores key-value pairs.
//
// Keys are unique.
// Order is preserved.

const map = new Map();

map.set("IN","India");
map.set("USA","United States");
map.set("FR","France");

console.log(map);



// Loop through Map

for (const [key,value] of map) {

    console.log(key, value);

}

// Output

// IN India
// USA United States
// FR France



// ==========================================================
// for...of DOES NOT WORK WITH OBJECTS
// ==========================================================

const myObject = {

    js: "JavaScript",

    cpp: "C++"

};

// Error

// for(const item of myObject){}



// ==========================================================
// for...in LOOP
// ==========================================================

// Used mainly for Objects.
//
// Returns the keys.

const languages = {

    js: "JavaScript",

    cpp: "C++",

    py: "Python"

};

for (const key in languages) {

    console.log(key);

}

// Output

// js
// cpp
// py



// Access Values

for (const key in languages) {

    console.log(languages[key]);

}

// Output

// JavaScript
// C++
// Python



// Print Both

for (const key in languages) {

    console.log(`${key} stands for ${languages[key]}`);

}



// ==========================================================
// for...in WITH ARRAY
// ==========================================================

const arr = ["JS","Python","Java"];

for (const index in arr) {

    console.log(index);

}

// Output

// 0
// 1
// 2



console.log(arr[1]);

// Python



// ==========================================================
// forEach()
// ==========================================================

// Executes a callback function once
// for each array element.

const coding = [

    "js",

    "python",

    "java",

    "cpp"

];

coding.forEach(function(item){

    console.log(item);

});



// Arrow Function

coding.forEach((item)=>{

    console.log(item);

});



// Using Normal Function

function printMe(item){

    console.log(item);

}

coding.forEach(printMe);



// ==========================================================
// forEach PARAMETERS
// ==========================================================

coding.forEach((item,index,array)=>{

    console.log(item);

    console.log(index);

    console.log(array);

});



// item -> current element

// index -> current index

// array -> original array



// ==========================================================
// IMPORTANT
// ==========================================================

// forEach NEVER returns a new array.

const values = coding.forEach((item)=>{

    return item;

});

console.log(values);

// Output

// undefined



// ==========================================================
// filter()
// ==========================================================

// Creates a NEW array
// containing elements that satisfy
// a condition.

const myNums = [

    1,2,3,4,5,6,7,8,9,10

];

const even = myNums.filter((num)=>{

    return num % 2 == 0;

});

console.log(even);

// Output

// [2,4,6,8,10]



// Without filter

const result = [];

myNums.forEach((num)=>{

    if(num > 5){

        result.push(num);

    }

});

console.log(result);



// ==========================================================
// map()
// ==========================================================

// Creates a NEW array by modifying
// every element.

const nums = [

    1,2,3,4

];

const newNums = nums.map((num)=>num+10);

console.log(newNums);

// Output

// [11,12,13,14]



// ==========================================================
// METHOD CHAINING
// ==========================================================

// Multiple methods can be chained.

const answer = nums

.map((num)=>num*10)

.map((num)=>num+1)

.filter((num)=>num>=30);

console.log(answer);



// ==========================================================
// reduce()
// ==========================================================

// Used to combine all array values
// into a single value.

const numbers2 = [

    1,

    2,

    3

];

const total = numbers2.reduce(

    function(accumulator,currentValue){

        return accumulator + currentValue;

    },

    0

);

console.log(total);

// Output

// 6



// Arrow Function

const total2 = numbers2.reduce(

    (acc,current)=>acc+current,

    0

);

console.log(total2);



// Example

const shoppingCart = [

    {

        item: "Book",

        price: 200

    },

    {

        item: "Pen",

        price: 20

    },

    {

        item: "Bag",

        price: 1000

    }

];

const totalPrice = shoppingCart.reduce(

    (acc,item)=>acc+item.price,

    0

);

console.log(totalPrice);

// Output

// 1220



// ==========================================================
// DIFFERENCE BETWEEN METHODS
// ==========================================================

/*

for...of

Works on Arrays, Strings,
Maps, Sets.

Returns values.



for...in

Mainly used for Objects.

Returns keys.



forEach()

Loops through array.

Returns undefined.



filter()

Returns a NEW array.

Keeps matching elements.



map()

Returns a NEW array.

Transforms every element.



reduce()

Returns ONE value.

Used for totals, sums,
averages, products, etc.

*/



// ==========================================================
// IMPORTANT POINTS
// ==========================================================

// 1. for...of returns values.
// 2. for...in returns keys.
// 3. for...of cannot iterate plain objects.
// 4. forEach() always returns undefined.
// 5. filter() returns a new filtered array.
// 6. map() returns a new transformed array.
// 7. reduce() returns a single value.
// 8. filter() requires a boolean condition.
// 9. map() should not be used for filtering.
// 10. Method chaining makes code cleaner.