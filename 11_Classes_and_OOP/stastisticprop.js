
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    createId(){
        return `123`
    }
}


const user1 = new User("Uday")
console.log(user1.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "qwerty@gmail.com")
console.log(iphone.logMe())

