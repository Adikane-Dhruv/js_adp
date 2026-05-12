function sayMyname()
{
    console.log("D")
    console.log("H")
    console.log("R")
    console.log("U")
    console.log("V")
}

sayMyname()
// sayMyname        is reference 

function addTwoNumbers(number1,number2)
{
    console.log(number1+number2);
}

addTwoNumbers(3,"a")
addTwoNumbers(3,2)
addTwoNumbers("3","a")
addTwoNumbers(3,null)

const result=addTwoNumbers(3,10)//cnsole doesnt return anything
console.log(result)//hence undefined


console.log("----------------")
function addTwoNumbers2(number1,number2)
{
    let res=number1+number2;
    return res;
    //return number1+number2
}

const res=addTwoNumbers2(2,10)
console.log("Result: ",res)


function loginUserMessage(username="adp")
{
    if(username===undefined /*or !username*/)
    {
        console.log("please enter uname!!!");
        return;
    }
    return `${username} just logged in!!!`
}

loginUserMessage("adp")//returned value but not printed

//hence

console.log(loginUserMessage("adp"))
console.log(loginUserMessage())


console.log("***************************")
//rest opertor ...
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(2))

console.log(calculateCartPrice(1,2,34,4,5,6))


function calculateCartPrice2(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice2(1,2,34,4,5,6))

const user={
    username:"adp",
    price:188
}

function handleObject(anyObject)
{
    console.log(`Username is: ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    username:"adp",
    price:133
})


const myNewArray=[1,2,3,4,5,6]

function returnSecondValue(getArray)
{
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))