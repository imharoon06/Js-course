// const coding = ["js","python","java","cpp","Ruby"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//    return num > 4
// })
// console.log(newNums);

// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title: 'Book One', Genre: 'Fiction', Publish: 1981 ,
     Edition: 2004 },
    {title: 'Book Two', Genre: 'Non-Fiction', Publish: 1992 ,
     Edition: 2008 },
    {title: 'Book Three', Genre: 'History', Publish: 1999 ,
     Edition: 2007 },
    {title: 'Book Four', Genre: 'Non-Fiction', Publish: 1989 ,
     Edition: 2010 },
    {title: 'Book Five', Genre: 'Science', Publish: 2009 ,
     Edition: 2014 },
    {title: 'Book Six', Genre: 'Fiction', Publish: 1987 ,
     Edition: 2010 },
    {title: 'Book Seven', Genre: 'History', Publish: 1986 ,
     Edition: 1996 },
    {title: 'Book Eight', Genre: 'Science', Publish: 2011 ,
     Edition: 2016 },
    {title: 'Book Nine', Genre: 'Non-Fiction', Publish: 1981 ,
     Edition: 1989 },
];

let userBooks = books.filter((bk) => bk.Genre === 'History' )

userBooks = books.filter( (bk) => {
    return bk.Publish >= 1990 && bk.Genre ==="History"})

console.log(userBooks);