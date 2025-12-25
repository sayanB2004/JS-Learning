const accountId = 144553
let accountEmail = "sayan@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2  //not allowed

accountEmail = "sb@sb.com"
accountPassword = "saybee"
accountCity = "Kolkata"

console.log(accountId)

/*
    Do not use var, block scope and functional scope issue
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
