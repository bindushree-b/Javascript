const accountId = 144553
let accountEmail = "bindu@google.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

// accountId = 2; //not allowed



accountEmail = "ghj.com"
accountPassword = "9876509"
accountCity = "Hydrabad"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])