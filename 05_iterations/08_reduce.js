// reduce

const myNums=[1,2,3,4]


// const myTotal=myNums.reduce( function (acc,currval) {
//     console.log(`acc: ${acc} and currvalue: ${currval}`);
//     return acc+currval
// },0)
// console.log(myTotal)


const myTotal=myNums.reduce( (acc,curr) => acc+curr, 0)
console.log(myTotal)



const shopping=[
    {
        itemName:'js course',
        price:2333
    },
    {
        itemName:'Data Science course',
        price:12333
    },
    {
        itemName:'py course',
        price:1244
    },
    {
        itemName:'Ps course',
        price:1200
    },
    {
        itemName:'KS course',
        price:12334
    },
]

const total=shopping.reduce( (acc,item) => acc+item.price , 0)
console.log(total)