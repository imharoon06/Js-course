const accountId = 44556
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Peshawar"
let accountState;
 
/* prefer not used to var
because of issue in block scope and functional scope
*/ 

accountEmail = "abc"
accountPassword = "1212121"
accountCity = "riyadh"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
