class User{
    constructor(uname)
    {
        this.uname=uname
    }

    logMe()
    {
        console.log(`Uname: ${this.uname}`)
    }

    static createId()
    {
        return `123`
    }
}

// const ADP=new User("ADP")
// console.log(ADP.createId())


class Teacher extends User{
    constructor(usname,email)
    {
        super(usname)
        this.email=email

    }
}

const akp=new Teacher("AkP","akp@gmail.com")
akp.logMe()
console.log(akp.createId())