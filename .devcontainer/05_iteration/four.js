const myObject = {
    js: 'javascript',
    cpp :'c++',
    rb : 'ruby',
    swift : "swift by apple"
}
for (const key in myObject) {
  //console.log(`${key} shortcut is for  ${myObject [key]}`);
}

const programming = ["js","python","ruby","cpp","java"]

for (const key in programming) {
   // console.log(programming[key]);
}

// const map = new Map()  // Map() is not iterable

// map.set('IN', "India")
// map.set('USA' , "united states of America")
// map.set('fr' , "France")
// map.set('Pak' , "Pakistan")

// for (const key in map) {
//   console.log(key);
// }
