class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);   
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user =  new Teacher("Uday","qwerty@gmail.com","1234567890")

user.addCourse()

const user2 = new User("Sharma")

user2.logMe()



