// for loop

// for(let i=0;i<10;i++)
// {
//     if(i==5)
//     {
//         console.log("5 is best no")
//     }
//     console.log(i)
// }


// for(let i=0;i<=10;i++)
// {
//     console.log(`Outer loop: ${i}`);
//     for(let j=0;j<=10;j++)
//     {
//         console.log(i + " X " + j + " = " + i*j);
//     }
// }



// let myArray=[1,2,3,4,5,6,7,8,9,0]

// for(let i=0;i<myArray.length;i++)
// {
//     const element=myArray[i]
//     console.log(element)
// }



/*---------break and continue--------------*/


// for(let i=0;i<=20;i++)
// {
//     if(i==5)
//     {
//         console.log("Detected 5")
//         break;
//     }
//     console.log(`Value of i is: ${i}`)
// }


for(let i=0;i<=20;i++)
{
    if(i==5)
    {
        console.log("Detected 5")
        continue;
    }
    console.log(`Value of i is: ${i}`)
}