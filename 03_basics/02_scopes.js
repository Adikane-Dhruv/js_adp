//let var const
//var c=300

let a=300
if(true)
{
    let a=10
    console.log(a)
    const b=20
    var c=30
}


console.log(a)
//console.log(b)
console.log(c)

// {} are scopes


// for(let i=0;i<array.length;i++)
// {
//     const element = array[i];
// }


function one(){
    const username="adp"

    function two()
    {
        const website="youtube"
        console.log(username)
    }
    //console.log(website);

    //two()
}

//one()


if(true)
{
    const username="adp"
    if(username==="adp")
    {
        const website="youtube"
        //console.log(username+website)
    }
    //console.log(website);
}
//console.log(username)


// ****** interesting ************

console.log(addone(10))
function addone(num)
{
    return num+1
}

addone(3)
console.log(addone(5))


addTwo(100)     //error because it is variable which is holding function
const addTwo=function(num){
    return num+2
}

addTwo(5)