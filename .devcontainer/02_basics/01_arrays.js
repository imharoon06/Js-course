//****arrays */

const myArr = [0,1,2,3,4]
const myHeros =["jhon","satham","tom"]

const myArr2 =new Array(1,2,3,4)

//console.log(myArr[1]);

//****array method */

//myArr.push(5)   
//myArr.push(6)///add more number
//myArr.pop() // remove last element

//myArr.unshift(9)  //add element in start of array
//myArr.shift()      // remove the above

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));
 
const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);

// slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);
const myn2 = myArr.splice(1,3)

console.log("C",myArr);
console.log(myn2);