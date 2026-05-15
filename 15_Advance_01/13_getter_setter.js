class User{
    constructor(email,pwd)
    {
        this.email=email;
        this.pwd=pwd;
    }

    get email()
    {
        return this._email.toUpperCase()
    }

    set email(value)
    {
        this._email=value
    }
    get pwd()
    {
        return `${this._pwd}adppp`
    }

    set pwd(value)
    {
        this._pwd=value.toUpperCase()
    }
}

const adp=new User("AKP","abc")
console.log(adp.pwd)
console.log(adp.email)
