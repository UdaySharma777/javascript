const User = {
    _email: "qwerty@gmail.com",
    _password: "qwertyu1234567890",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value

    }

}


const user = Object.create(user)
console.log(user.email);