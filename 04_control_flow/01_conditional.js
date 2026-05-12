// if statement

//if(condition){}

//if(true){}
//if(false){}

const isUserloggedIn=true;

if(isUserloggedIn)
{
    console.log("Yes!!!")
}

// < > <= >= == != ===(also checks datatype) !==

if(2=='2')
{
    console.log("Executed!!")
}

if(2==='2')
{
    console.log("Executed!!")
}


let temp=40

if(temp<30)
{
    console.log("Winter")
}
else
{
    console.log("Summer")
}


const score=200

if(score>100)
{
    //var power='fly'
    const power='fly'
    console.log(`USer power ${power}`)
}

//will give error as it is declared inside the if with const

//console.log(`USer power ${power}`)


//Short hand notation
const balance=1000
if(balance>500) console.log("test");


if(balance<500)
{
    console.log("less than")
}
else if(balance<750)
{
    console.log("less than 750")
}
else if(balance<900)
{
    console.log("less than 900")
}
else{
    console.log(">1200")
}



console.log("----------------------------")


const userLoggedIn=true
const debitCard=true
const LoggedInFromGoogle=false
const LoggedInFromEmail=true
if(userLoggedIn && debitCard)
{
    console.log("Allowed!!!")
}
else{
    console.log("Not Allowed!")
}

if(LoggedInFromEmail || LoggedInFromGoogle)
{
    console.log("Logged in");
}
else{
    console.log("Dont")
}