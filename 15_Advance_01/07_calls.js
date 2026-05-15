function SetUsername(uname){
    //complex db calls
    this.uname=uname
    console.log("called")
}

function createUser(uname,email,pwd)
{
    //SetUsername(uname)
    SetUsername.call(this,uname)
    this.email=email;
    this.pwd=pwd;
}

const adp=new createUser('adp','adp@gmail.com','123')
console.log(adp)