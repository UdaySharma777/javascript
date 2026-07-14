// const appUser = new Object() // singleton object

// const appUser={}// non-singleton object
// appUser.id = "123abc"
// appUser.name = "Uday"
// appUser.isLoggedIn = false
// console.log(appUser)


// const newUser ={
//     email:"qwerty@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Uday",
//             lastname:"Sharma"
//         }
//     }
// }

// console.log(newUser.fullname);
// console.log(newUser.fullname.userfullname);
// console.log(newUser.fullname.userfullname.firstname);

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"c", 4:"d"}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 2,
//         email: "a@gmail.com"
//     },
//     {
//         id: 3,
//         email: "b@gmail.com"
//     }
// ];


// users[1].email
// console.log(newUser)

// console.log(Object.keys(newUser))



const course = {
    coursename:"javascript",
    price:"$20",
    courseInstructor:"self Paced"
}

const {courseInstructor} = course
console.log(courseInstructor);

//+++++++++++API++++++++++++

// {
//     "name":"Uday",
//     "coursename":"Javascript",
//     "price":"$20"
// }



