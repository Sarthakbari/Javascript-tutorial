const accountId = 2345617  
let accountEmail = "barisarthak@google.com"
var accountPassword = "SarthakBari"
accountCity = "Mumbai"
let accountState;

// accountId = 2  // Not allowed
console.log(accountId);

accountEmail = "sarthakbari@google.com"
accountPassword = "BAriSarthak"
accountCity = "Goa"

console.log(accountEmail, accountPassword, accountCity)
console.table([accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functionl scope.
*/