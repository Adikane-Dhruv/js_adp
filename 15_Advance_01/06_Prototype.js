// let myName='Adp'

// console.log(myName.length)


let myName='Adp        '

console.log(myName.length)

// want to make trueLength
//console.log(myName.trueLength)

let myHeroes=['thor','spiderman']

let heroPower={
    thor:'hammer',
    spiderman:'sling',

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    } 
}

Object.prototype.Adp=function()
{
    console.log(`adp is present in all objects!!!`)
}

heroPower.Adp()

myHeroes.Adp()

Array.prototype.heyAdp=function(){
    console.log("Hello from ADP")
}

myHeroes.heyAdp()
//heroPower.heyAdp()



//inheritance

const User={
    name: 'Akp',
    email:'adp@gmail.com'
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

// Teacher.__proto__=User


// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="Adp              "

String.prototype.truelength=function(){
    console.log(`${this}`);
    //console.log(`${this.name}`)
    console.log(`${this.trim().length}`)
}

anotherUsername.truelength()
"ADIKANE DHRUV          ".truelength();
