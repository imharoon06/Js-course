// functions

function sayMyName(){
    console.log("H")
    console.log("A")
    console.log("R")
    console.log("O")
    console.log("O")
    console.log("N")

}
//sayMyName()

    // function addTwoNumber (number1, number2){  //parameters
    //     console.log(number1 + number2);
    // }

function addTwoNumber (number1, number2){ 
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumber(3,4) // this is called arguments
//console.log("Result:",result);

function loginUserMessage(username="samm"){ //we can give by defualt value samm
    if(username === undefined ){
        console.log("Please enter the username");
        return    
    }
    return `${username} just Logged in`
}
//console.log(loginUserMessage("Haroon"));
console.log(loginUserMessage());


//cart price caculations//

function calculateCartPrice(...num1){ //rest operator ...
    return num1
}
console.log(calculateCartPrice(200,400,500));

 //obj//
const user ={
    username : "haroon",
    price : 199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price ${anyObject.price}`);

}
//handleObject(user)
handleObject({
    username :"sam",
    price: 200,
})

//pass also arrays//

const myNewArray = [200,400,300,500]

function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,400,500,300]));
