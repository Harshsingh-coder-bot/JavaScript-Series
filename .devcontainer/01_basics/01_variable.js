const accountId = 144553  // constant 
let accountEmail = "harshsinghr254@gmail.com"// no scope problem
var accountPassword= "123456"//scope problem
accountCity = "Dehradun"
let accountState;

//accountId =2// not alllowed

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState])


/*

note = not to use var bcz of issue in block scope and 
functional scope 
*/