function multiply(num)
{
    return num*5
}

multiply.power=2

console.log(multiply(5))
console.log(multiply.power);
console.log(multiply.prototype);


function createUser(username,score)
{
    this.username=username;
    this.score=score;
}


createUser.prototype.increment=function()
{
    this.score++
}

createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`)
}

// const adp=createUser('Adp',25)
// const akp=createUser('Akp',30)

// adp.printMe()

const adp=new createUser('Adp',25)
const akp=new createUser('Akp',30)

adp.printMe()

