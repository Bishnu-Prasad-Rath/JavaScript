const accountId = 144553
let Email = "rama@example.com"
var accountPassword = "password123"
accountCity = "New York"
let accountState;
// accountId=2  not allowed in const
Email = "myna@example.com"
accountPassword = "newpassword456"
accountCity = "Los Angeles"
console.table({ accountId, Email, accountPassword, accountCity , accountState });

/*Prefer not to use Var because in issue in block scope and functional scope   */

