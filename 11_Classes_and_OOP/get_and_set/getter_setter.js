class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value.toUpperCase()
    }

    get password(){
        return this._password.toUpperCase()

    }
    set password(value){
        this._password =value.toUpperCase()
    }
}

const user = new User("qwerty@gmail.com","1234567890qwerty")
console.log(user.password);
console.log(user.email);

