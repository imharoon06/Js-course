var c = 300
let a = 300
const b = 20

if(true){
    let a = 10
    const b =20
   // console.log("INNER :" + a);
}

//console.log(a);
//console.log(b);


function one(){
    const username ="haroon"

    function two(){
        const website = "youtube"
       // console.log(username);
    }
    //console.log(website);

    two()

}
one()

if(true){
    const username ="haroon"

    if(username === "haroon"){
    const website = " youtube"        
       // console.log(username + website);
    }
    //console.log(website);   
}
//console.log(username);



///*********************interesting ************/
console.log(addnone(5)); // we used this 
function addnone (num){
    return num +1
}



//addtwo()  // dont used function in this case
const addtwo = function(num){
    return num +2
}
addtwo()