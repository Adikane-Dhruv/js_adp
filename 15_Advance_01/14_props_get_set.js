function User(email,pwd)
{
    this._email=email;
    this._pwd=pwd;

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email=value
        }
    })

    Object.defineProperty(this,'pwd',{
        get: function(){
            return this._pwd.toUpperCase()
        },
        set:function(value){
            this._pwd=value
        }
    })

}

const fill=new User("adp@gmail.com","Stephen")

console.log(fill.email)