class User {
    constructor(username,email,password) {
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user = new User("Uday","qwerty@gmail.com","1234567890")
console.log(user.encryptPassword());
console.log(user.changeUsername());
