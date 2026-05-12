//const tinderUser=new Object() //singelton obj
const tinderUser={} //non singelton object
console.log(tinderUser)

tinderUser.id="123abc"
tinderUser.name="Adp"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regUser={
    email:"adp@gmail.com",
    fullname:{
        userfullname:{
            fname:"Dhruv",
            lname:"Adikane"
        }
    }
}

console.log(regUser.fullname.userfullname.fname)

// console.log(regUser.fullname?.userfullname.fname)

const obj1={
    1:"a",2:"b"
}

const obj2={
    3:"c",4:"d"
}

// const obj3={obj1,obj2}
// console.log(obj3)


const obj3=Object.assign(obj1,obj2)
console.log(obj3)

const obj4=Object.assign({},obj1,obj2)
/*

{} will be target
and other obj1,obj2,etc will be source
// */
// console.log(obj4)

// const obj5={...obj1,...obj2}
// console.log(obj5)


console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//****Destructuring/
console.log("-----------------")
const course={
    courseName:'js',
    price:"999",
    instructor:"adp"
}

// course.instructor

const {instructor} = course
console.log(instructor)

const {instructor: inst} = course
console.log(inst)

// React js portion
// const navbar=(props.company)=>{

// }

// navbar(company="adp")

// we can also destruct the array later on

// {
//     "name":"adp",
//     "courseName":"js",
//     "price":"free"
// }


