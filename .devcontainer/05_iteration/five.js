const coding =["java","python","ruby","cpp"]

// coding.forEach( function(val){
//     console.log(val);
// })

// coding.forEach( (item) => {
// console.log(item);
// })

// function printMe (item,index,arr){
// console.log(item,index,arr);
// }
// coding.forEach(printMe)

const myCoding = [
    { 
    languageName: "javascript",
    languageFileName: "js"
},
    { 
    languageName: "java",
    languageFileName: "java"
},
    { 
    languageName: "python",
    languageFileName: "py"
},

]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})