// singleton

//object literals

const mySym = Symbol ("key1")

const JsUser ={
    name : "haroon",
    "Full name" : "Muhammad Haroon",
    age : 25,
    [mySym] : "myKey1",
    email : "im.haroonkh06@gmail.com",
    location : "Riyadh",
    isLoggedin : false,
    LastLoginDays : ["monday","sunday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["Full name"])
//console.log(JsUser[mySym]) //interview point view symbol method

JsUser.email = "haroonkhan@gmail.com" // apply this override mehtod to change the email
//Object.freeze(JsUser) // to lock the object
JsUser.email ="harooonn123@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello  JS User");
}

JsUser.greeting2 =function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());