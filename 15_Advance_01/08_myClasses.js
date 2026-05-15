// ES6

// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername()
//     {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const adp=new User("Adikane","adp@gmail.com","123")

// console.log(adp.encryptPassword())
// console.log(adp.changeUsername())


// behind the scene

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

User.prototype.changeUsername=function()
    {
        return `${this.username.toUpperCase()}`
    }

const adp=new User("Zee","Zee@gmail.com","123")

console.log(adp.encryptPassword())
console.log(adp.changeUsername())