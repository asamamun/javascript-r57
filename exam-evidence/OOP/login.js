const bestClub = "Your Club";
class Login{
    constructor(e,p){
        this.email = e;
        this.pass = p;
    }
    #testemail(em){
        var re = /\S+@\S+\.\S+/;
        //console.log(re.test(em))
        return re.test(em)
    }
    validate(){
        let m = {};
        let error = false;

        if(!this.#testemail(this.email)) {
            error=true; 
            m.emailerror   = "Invalid Email";
            //console.log(m)
        }
        if(this.pass.length < 4 || this.pass > 8){
            error=true;
            m.passworderror ="Passwords must be between 4 and 8 characters";
            //console.log(m)
        }
        return {e:error,message:m}
    }
}

export {Login,bestClub}
