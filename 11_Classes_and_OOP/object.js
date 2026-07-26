function multipleby5(num){
    return num*5
}

multipleby5.power = 2

console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment =function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
    
}

const order2 = new createUser("Pizza",200)
const order1 = new createUser("Sandwhich",100)

order1.printMe()
