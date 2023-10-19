// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// to declare a specific date

//let myCreatedDates = new Date(2023,0,23,5,8)
let myCreatedDates = new Date("01-25-2023") // mm dd yyyy format
//console.log(myCreatedDates.toDateString());
console.log(myCreatedDates.toLocaleString());

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(myCreatedDates.getTime());
console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()
console.log(newDate.getDay());

//`${newDate.getDate()}and the time`

newDate.toLocaleString('default',{
    weekday : "long"
})
