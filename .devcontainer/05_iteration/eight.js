const myNums =[1,2,3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`Accumulator: ${acc} and currentvalue ${currval}`);
//     return acc + currval
// }, 0)

//arrow function
const myTotal = myNums.reduce((acc,currval) => acc + currval,0 )

//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 1999
    },
    {
        itemName: "python",
        price: 2999
    },
    {
        itemName: "Data science course",
        price: 12999
    },
    {
        itemName: "java course",
        price: 3999
    },
]

const priceToBuy = shoppingCart.reduce((acc,item) => acc+item.price ,0)

console.log(priceToBuy);