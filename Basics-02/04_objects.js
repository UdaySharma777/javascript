// ==========================================================
// JAVASCRIPT OBJECTS (PART 2)
// ==========================================================


// ==========================================================
// CREATING OBJECTS
// ==========================================================

// Non-Singleton Object (Object Literal)

const user1 = {};



// Singleton Object

const user2 = new Object();



// Adding Properties

user2.id = "123abc";
user2.name = "Uday";
user2.isLoggedIn = false;

console.log(user2);



// ==========================================================
// NESTED OBJECTS
// ==========================================================

const newUser = {

    email: "abc@gmail.com",

    fullname: {

        userfullname: {

            firstname: "Uday",

            lastname: "Sharma"

        }

    }

};



// Accessing Nested Objects

console.log(newUser.fullname);

console.log(newUser.fullname.userfullname);

console.log(newUser.fullname.userfullname.firstname);

console.log(newUser.fullname.userfullname.lastname);



// ==========================================================
// MERGING OBJECTS
// ==========================================================

const obj1 = {

    1: "a",

    2: "b"

};

const obj2 = {

    3: "c",

    4: "d"

};



// Object.assign()

const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);

// Output

// {
//   1:'a',
//   2:'b',
//   3:'c',
//   4:'d'
// }



// Spread Operator

const obj4 = {

    ...obj1,

    ...obj2

};

console.log(obj4);

// Spread operator is the modern and preferred way.


// ==========================================================
// ARRAY OF OBJECTS
// ==========================================================

const users = [

    {

        id: 1,

        email: "a@gmail.com"

    },

    {

        id: 2,

        email: "b@gmail.com"

    },

    {

        id: 3,

        email: "c@gmail.com"

    }

];



// Accessing Data

console.log(users[0].email);

console.log(users[1].id);

console.log(users[2].email);



// ==========================================================
// OBJECT METHODS
// ==========================================================

const appUser = {

    id: "123",

    name: "Uday",

    isLoggedIn: false

};



// Object.keys()

console.log(Object.keys(appUser));

// Returns array of keys.

// ["id","name","isLoggedIn"]



// Object.values()

console.log(Object.values(appUser));

// Returns array of values.


// Object.entries()

console.log(Object.entries(appUser));

// Returns key-value pairs.


// hasOwnProperty()

console.log(appUser.hasOwnProperty("name"));

// true

console.log(appUser.hasOwnProperty("email"));

// false



// ==========================================================
// OBJECT DESTRUCTURING
// ==========================================================

const course = {

    courseName: "JavaScript",

    price: "$20",

    courseInstructor: "Self Paced"

};



// Normal Way

console.log(course.courseInstructor);



// Destructuring

const { courseInstructor } = course;

console.log(courseInstructor);



// Rename While Destructuring

const {

    courseInstructor: instructor

} = course;

console.log(instructor);



// ==========================================================
// WHY USE DESTRUCTURING?
// ==========================================================

// Without Destructuring

console.log(course.courseInstructor);

console.log(course.courseInstructor);

console.log(course.courseInstructor);



// With Destructuring

const {

    courseInstructor: teacher

} = course;

console.log(teacher);

console.log(teacher);

console.log(teacher);

// Cleaner and easier to read.


// ==========================================================
// JSON
// ==========================================================

// JSON = JavaScript Object Notation

// Used to exchange data between
// client and server.



// JSON Object

{

    "name": "Uday",

    "courseName": "JavaScript",

    "price": "$20"

}



// JSON Array

[

    {

        "id": 1,

        "name": "Uday"

    },

    {

        "id": 2,

        "name": "Rahul"

    }

]



// ==========================================================
// OBJECT vs JSON
// ==========================================================

/*

JavaScript Object

const user = {

    name: "Uday",

    age: 22

};

Keys may or may not use quotes.



JSON

{

    "name":"Uday",

    "age":22

}

Keys MUST be in double quotes.

JSON cannot contain:

- Functions
- undefined
- Symbol

*/



// ==========================================================
// IMPORTANT POINTS
// ==========================================================

// 1. {} creates a non-singleton object.
// 2. new Object() creates a singleton object.
// 3. Objects can contain nested objects.
// 4. Access nested objects using dot notation.
// 5. Object.assign() merges objects.
// 6. Spread operator (...) is the modern way to merge objects.
// 7. Arrays can contain objects.
// 8. Object.keys() returns an array of keys.
// 9. Object.values() returns an array of values.
// 10. Object.entries() returns key-value pairs.
// 11. hasOwnProperty() checks if a property exists.
// 12. Destructuring extracts properties into variables.
// 13. JSON is a text format used for data exchange.
// 14. JSON keys must always be enclosed in double quotes.