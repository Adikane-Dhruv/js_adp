//arrays

const myArray=[1,2,3,4,5,6,'adp',true]
const myArr=[1,2,3,4,5,6]

console.log(myArr[3])

const myArr2=new Array(1,2,3,4,5,6)
// console.log(myArr2)

// myArr2.push(7)
// console.log(myArr2)
// myArr2.push(8)
// console.log(myArr2)

// myArr2.pop()
// console.log(myArr2)

// myArr2.unshift(9)
// console.log(myArr2)

// myArr2.shift()
console.log(myArr2.includes(55))
console.log(myArr2.indexOf(55))
console.log(myArr2.indexOf(3))

const newArr=myArr2.join()

console.log(myArr2)
console.log(newArr)


// slice splice
console.log("-------------------")
console.log("A ",myArr2);

const myn1=myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr2)

const myn2=myArr2.splice(1,3)
console.log("C",myArr2)
console.log(myn2)