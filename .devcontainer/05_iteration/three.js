// for of 

//[{},{},{}]
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(`value is ${num}`);
    
}

//string
const greeting = "Hello world!"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

//Map

const map = new Map()

map.set('IN', "India")
map.set('USA' , "united states of America")
map.set('fr' , "France")
map.set('Pak' , "Pakistan")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}