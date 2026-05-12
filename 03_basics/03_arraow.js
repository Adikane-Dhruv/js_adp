// when you refer current context use this
const user={
    username:"adp",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},  welcome to site`);
        console.log(this);
    }
}

// when you use this in following way

// user.welcomeMessage()
// user.username="Jack"
// user.welcomeMessage()

//console.log(this)

//when you are in node env , "this" refers to empty object


// function x()
// {
//     //console.log(this)
    
//     //let uname="adp"
//     //console.log(this)

//     let uname="adp"
//     console.log(this.uname)
// }

// x()


// const x=function()
// {
//     let uname="adp"
//     console.log(this.uname)
// }

// x()

//arrow function
// const x=() =>
// {
//     let uname="adp"
//     console.log(this.uname)
// }

// x()

// const x=() =>
// {
//     let uname="adp"
//     console.log(this)
// }

// x()

// explicit return
// const addTwo= (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,2))


//implicit return
const addTwo= (num1,num2)=>(num1+num2)
console.log(addTwo(3,2))

const addName=(num1,num2)=>({username:"adp"})

console.log(addName(3,4))


const myArray=[1,2,3,4,5,6]

//myArray.forEach(()=>())