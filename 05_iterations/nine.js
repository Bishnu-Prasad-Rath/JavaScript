const myNums = [1,2,3,4,5,6,7]

// const myTotal = myNums.reduce(function(acc,cur){
//     console.log(`acc: ${acc}, cur: ${cur}`);
//     return acc+cur
// },0)

// const mytotal = myNums.reduce((acc,cur)=>acc+cur,0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 199 
    },
    {
        itemName : "css course",
        price : 150
    },
    {
        itemName : "html course",
        price : 100
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(priceToPay);