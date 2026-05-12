// Immediatelu Invoked Function Expressions (IIFE)


// function conn()
// {
//     console.log("Connected");
// }
// conn()


(function conn()    //named iife
{
    console.log("Connected");
})();

//to remove the pollution of global scope
( () => {
    console.log("Connected2")
})();


//unnamed iife
( (name) => {
    console.log(`Connected2 with ${name}`)
})('adp');


