const accountId = 1445553
let acountEmail = "qwerty@gmail.com" // 
var accountPassword = "1234567890"
accountCity = "Bhiwani"
let accountState;

/* 
prefer not to use var 
bcz of issue in block scope and functional scope
*/
// accountId = 2 // not allowed
accountEmail = "qaz@gmail.com"
accountPassword = "0987654321"
accountCity = "Bengluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);