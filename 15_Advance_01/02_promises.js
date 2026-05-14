const promiseOne=new Promise(function(resolve,reject){
    //Do and async task
    //Db calls, cryptography,network
    setTimeout(function(){
        console.log('Async task completed!!!')
        resolve()
    },1000)
})


promiseOne.then(function(){
    console.log("Promise Consumed!!!")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"Adp",email:"adp@tmail.com"})  
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"adp",pwd:"123"})
        }
        else{
            reject('ERROR: Something went wrong!!!')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>console.log("The promise is either resolved or rejected!!!"))


const PromiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"adp",pwd:"123"})
        }
        else{
            reject('ERROR: JAVASCRIPT went wrong!!!')
        }
},1000)
})

async function consumePromiseFive(){
    try
    {
        const response=await PromiseFive
        console.log(response);
    }
    catch(error)
    {
        console.log(error)
    }

    
}

consumePromiseFive()


async function getAllUsers(){
    try {
        const response=await fetch('https://api.github.com/users/Adikane-Dhruv')
    //const data=response.json()
    const data=await response.json()
    console.log(data)
    //console.log(response)
    } catch (error) {
        console.log(error)
    }
    
}

// getAllUsers()

fetch('https://api.github.com/users/Adikane-Dhruv')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))
