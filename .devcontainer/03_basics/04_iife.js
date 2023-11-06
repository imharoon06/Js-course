//immediatly invoked function expression (IIFE)

(function chai(){     // IIFE will used to remove global scope polution
    //named IIFE
    console.log(`DB CONNECTED`);
})() ;    // to write two IIFE must end with semi colon          

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("haroon")