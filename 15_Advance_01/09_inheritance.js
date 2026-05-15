class User{
    constructor(uname)
    {
        this.uname=uname
    }

    logMe(){
        console.log(`Uname is ${this.uname}`);
    }
}

class Teacher extends User{
    constructor(uname,email,pwd)
    {
        super(uname)
        this.email=email;
        this.pwd=pwd;
    }

    addCourse()
    {
        console.log(`Added by ${this.uname}`);
    }
}

const adp=new Teacher("akp","akp@gmail","123")

adp.addCourse()

const ms=new User("hiii")
// ms.addCourse()
ms.logMe()

console.log(adp instanceof Teacher)