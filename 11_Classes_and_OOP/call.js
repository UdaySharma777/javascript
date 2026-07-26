function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
    } 

function createUser(username,email,password){
    SetUsername.call(username)
    this.email = email
    this.password =password
}

const user = new createUser("Uday","udfay777sh@gmail.com","1234")
console.log(user);

