// Primative 
   // 7 Types: String, Numbers, boolean,null, undefined,symbol, bigInt
 const score =100
 const scoreValue = 100.3

 const isLoggedIn = false     //Boolean
 const outsideTemp = null
 let userEmail; // undefined

 const id = Symbol(123)      //symbol
 const anotherid = Symbol('123')

 //console.log(id === anotherid);

 const bigNumber  = 344556753235436n  //bigInt

//Reference (non primative)
    // Array, Objects, Functions

    const heros = ["Tom cruise","david","johnson satham"];   // array

 let myObj = {
    name: "haroon",
    age: 25,
 }
 const myFunction = function(){
    console.log("hello world");
 }
 console.log(typeof myFunction);

 //***********************************
   // Stack(primative),  Heap(non primative)

   let myYoutubename = "hiteshChudary.com"

   let anotherName = myYoutubename
   anotherName = "chaiaurcode"

   console.log(myYoutubename);
   console.log(anotherName);

   let userOne = {
      email: "user@google.com",
      upi: "user@ybl"
   }
  let userTwo = userOne

   userTwo.email="hitesh@google.com" 

   console.log(userOne.email);
   console.log(userTwo.email);