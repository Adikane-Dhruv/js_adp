const user={
    username:"adp",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        //console.log("Got user details")
        //console.log(`Username: ${this.username}`)
        //console.log(this)
    }
}

//console.log(user.username);
// console.log(user.getUserDetails())
//console.log(this)


//const promiseOne=new Promise()
//const date=new Date()


function User(userName,loginCount,isLoggedIn){
    this.userName=userName;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function()
    {
        console.log(`welcome ${this.userName}`)
    }
    //return this
}

const userOne=new User('Adp',23,true)
const userTwo=new User('Adikane',11,false)
console.log(userOne)
console.log(userTwo)