const user = {
    username: "haroon",
    price : 999,

    welcomeMesaage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}
// user.welcomeMesaage()
// user.username = "sam"
// user.welcomeMesaage()

//console.log(this); // in browser global object is window obj

// function chai(){
//     let username = "haroon"
//     console.log(this.username);
// }
// chai()

    // const chai = function(){
    //    let username = "haroon"
    // console.log(this.username);
    //  }
    // chai()

    // const chai = () =>  {
    //     let username ="haroon"
    //     console.log(this.username);
    // }
    // chai()

    // const addTwo = (num1, num2) => {  // explicit return
    //     return num1 + num2
    // }

    //const addTwo = (num1, num2) => num1 + num2    // implicit return
    //const addTwo =(num1, num2) => (num1 + num2)

    const addTwo =(num1, num2) => ({username: "haroon"})  //object is always inside parenthesis
    
    console.log(addTwo(3,7));
