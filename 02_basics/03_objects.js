// singleton (through constructor)

// object literals
// Constructor--->   Object.create

const mySym=Symbol("key1")
const JsUser={
    name:'adp',
    [mySym]:'mykey1',
    "full name":'Adikane Dhruv P',
    age:25,
    location:'Abad',
    email:'adp@gmail.com',
    isLoggedIn:false,
    lastLogin:['Monday','Sunday']
}

console.log(JsUser.email)
console.log(JsUser['email'])
//console.log(JsUser.full name)
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email="adp@yahoo.com"
console.log(JsUser)
//Object.freeze(JsUser)
JsUser.email="fsfsfs@yahoo.com"
console.log(JsUser)




JsUser.greeting=function(){
    console.log("Hello jS user");
}

console.log("**********************")
console.log(JsUser.greeting())

JsUser.greeting2=function(){
    console.log(`Hello jS user, ${this.name}`);
}

console.log(JsUser.greeting2())