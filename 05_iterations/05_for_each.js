const coding=["js","ruby","java","python","cpp"]

coding.forEach(function (item) {
    console.log(item)
})

//with arrow function
coding.forEach( (item) => {
    console.log(item)
})


function printme(item)
{
    console.log(item);
}

console.log("-----------")
coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


const myCoding=[
    {
        langname:"js",
        langfile:".js"
    },
    {
        langname:"Java",
        langfile:".java"
    },
    {
        langname:"CPP",
        langfile:".cpp"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.langfile);
    console.log(item.langname);
})


// for each never return any value!!!
const values=coding.forEach( (item)=> {
    console.log(item)
    return item
})

console.log(values)

