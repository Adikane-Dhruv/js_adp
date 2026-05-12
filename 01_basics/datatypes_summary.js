//Primitive

//Call by value is Primitive

//7 types: String Number Boolean null undefined Symbol BigInt  

// js is dynamic type
const score=100
const scoreValue=100.3
const isLoggedIn=false
const temp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)


const bigNumber=2321322423423423n




// non primitive or Reference datatypes

// Objects Arrays Functions 


const heroes=["abc","cdfg","hhd","heye"];
let muObj={
    name:"adp",
    age:23,
}

const myFunction=function(){
    console.log("Hello!!!!");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);



// *************

//Stack , Heap Memory

// Stack is used in primitive datatype
// Heap is used in non-primitive

let x="adp"
let y=x

console.log(x)
console.log(y)

let user1={
    name:"adp",
    class:"mca"
}

let user2=user1

console.log(user1);
console.log(user2)

user2.class='phd'
console.log(user1);
console.log(user2)
