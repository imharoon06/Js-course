const marvel_heros =['thor','spider','ironman']
const dc_heros =['superman','flash','batman']

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);

//const all_heros = marvel_heros.concat(dc_heros)  // cancat method
//console.log(all_heros);

//const all_new_heros =[...marvel_heros,...dc_heros] //spread mehtod
//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[8,9]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//console.log(Array.isArray("haroon"));
console.log(Array.from("haroon"));
console.log(Array.from({name: "haroon" })); //interview  point 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));