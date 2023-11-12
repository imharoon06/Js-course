// if

// const isLoggedIn = true
// const temperature = 51

// if (temperature < 50) {
//     console.log("Temperature is less than 50");
// }else{
// console.log("Temperature is greatwe than 50");
// }
// //  >, < ,=>,<= , == , === , != ,!==

// scopes exmple // global and funtional 

// const score = 200

// if (score > 100 ) {
//     let power = "fly"
//     console.log(`User Power: ${power} `);
// }
// console.log(`user power ${power}`);

//const balance = 1000

//if (balance > 500 ) console.log("test"), console.log("test2"); //implicit return 

// if (balance < 500) {
//     console.log("balance is less than 500");    
// } else if (balance < 750) {
//     console.log("balance is less than 750");
// }else if (balance < 1200) {
//  console.log("balnace is less than 1200");    
// }

const isLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if (isLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInfromGoogle || loggedInfromEmail) {
    console.log("User logged in");
}