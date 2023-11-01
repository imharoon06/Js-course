//const tinderUser = new Object() sigleton object
const tinderUser = {}  //and this one non singleton

tinderUser.id ="abc123"
tinderUser.name ="sammy"
tinderUser.isLoggedin ="false"

//console.log(tinderUser);

const regularUser ={
    email : "abc@gmail.com",
    fullname : {
        userfullname: {
            firstname: "haroon",
            lastname: "khan",
        }
         
    }
}

//console.log(regularUser.fullname.userfullname.lastname);

const obj1 ={1:"a", 2:"b"}
const obj2 ={2:"c", 4:"d"}
const obj3 ={5:"e",6:"f"}

//const obj3 = {obj1,obj2}
//const obj4 =Object.assign({},obj1,obj2,obj3) // check docs in mdn 


const obj4 ={...obj1,...obj2,...obj3} //most we used this spread operator

//console.log(obj4);

const users = [    // is very important used most time in databases

    {
      id: 1,
     email: "h@gmail.com",
    },
    {
    id: 2,
    email: "hk@gmail.com",
    },
    {
        id: 3,
    email: "hkn@gmail.com",
    },
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));     // is very important used most time in databases
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedin'));


//de structuring imp method

const course ={
    coursename: "javascript",
    price : 999,
    courseInstructor :"hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor } = course
console.log(instructor);

//briefly Api  JSON formatter

{
    name: "haroon",
    coursename: "JS",
    price: "free"
}

[
    {},
    {},
    {},   
]