 const name = "Haroon"
 const repoCount = 50

 //console.log(name + repoCount);

 console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`);

 const gameName = new String('Haroon-kh')

 console.log(gameName[0]);
 console.log(gameName.__proto__);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 
 console.log(gameName.charAt(4));
 console.log(gameName.indexOf('a'));

 const newString = gameName.substring(0,4)
 console.log(newString);

 const anotherString = gameName.slice(-8, 4)
 console.log(anotherString);

 const newStringOne = "  haroon   "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://haroon.com/haroon%20khan"
 console.log(url.replace('%20','-'))

 console.log(gameName.split('-'));