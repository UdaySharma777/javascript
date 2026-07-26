// const user = {
//     username:"Uday",
//     LoginCount:8,
//     SignedIn:true,

//     getUserDeatails:()=>{
//         // console.log("Got user Details");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
        
        
        
//     }
// }



// const user2 = {
//     username:"Uday",
//     LoginCount:8,
//     SignedIn:true,

//     getUserDeatails:()=>{
//         // console.log("Got user Details");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
        
        
        
//     }
// }


// console.log((user.username));
// // console.log(user.getUserDeatails());
// console.log();

// const promiseOne = new Promise()  // new is a constructor it creats an object


function User(username,LoginCount,isLoggesIn){
    this.username = username
    this.LoginCount = LoginCount
    this.isLoggesIn = isLoggesIn
    return this
}

// const userOne = User("Uday",12,true)
// const userTwo = User("Sharma",10,false)
// console.log(userTwo);

const userOne = new User("Uday",12,true)
const userTwo = new User("Sharma",10,false)
console.log(userOne);
console.log(userTwo);







