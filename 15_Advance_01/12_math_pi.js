const des=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(des)
// console.log(Math.PI)


//const myNew=Object.create(null)


const adp={
    name:'User',
    price:240,
    isAvailable:true,

    order:function(){
        console.log("Not placed")
    }
}

console.log(adp)
console.log(Object.getOwnPropertyDescriptor(adp,'name'));

Object.defineProperty(adp,'name',{
    writable:false,
    enumerable:true,
})

// console.log(Object.getOwnPropertyDescriptor(adp,'name'));

// for (let [key,value] of adp) {
//     console.log(`${key} : ${value}`)
// }

for (let [key,value] of Object.entries(adp)) {
    if(typeof value!== 'function')
    {
        console.log(`${key} : ${value}`)
    }
    
}
