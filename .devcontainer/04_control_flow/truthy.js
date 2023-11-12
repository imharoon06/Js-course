const userEmail = "haroon@gmal.com"

if (userEmail) {
    console.log("Got an Email");    
}else{ console.log("don,t have user email");
}

// falsey value
// false ,0,-0, Bigint on, "" ,null, NaN, undefined

//truthy values
// "0", 'false'," ",[],{}, function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    //console.log("Object is empty");
}

//Nullish coallesing operator = (??) : null undefined

// let val1;

// val1 = 5 ?? 10
// //val1 = null ?? 10
// //val1 = undefined ?? 10

// console.log("val1");