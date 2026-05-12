// truthy and falsy value

// No comparison as e assumed that string is truth
const userEmail="adp@gmail.com"

if(userEmail){
    console.log("Got!!!")
}
else{
    console.log("Dont have!!")
}

/*

Falsy Values
--------------
false
0
-0
BigInt 0n
""  //empty string
null
undefined
NaN


truthy values
-----------------
"0"
"false"
" "
[] //empty array
{}  //empty obj
function(){} //empty function


*/

const emptyObj={}

if(Object.keys(emptyObj).length===0)
{
    console.log("Obj is empty")
}


/*

false == 0   will give true
false == ''     is true
0 == '' is also true

*/


// Nullish Coalescing Operator (??): null undefined

let val1;
//val1=5 ?? 10
//val1=null ?? 100
//val1=undefined ?? 15

val1=null ?? 10 ?? 20
console.log(val1)


// ternary operator 

// condition ? true : false

const price=100;

price>=20?console.log(">20"):console.log("<20") 