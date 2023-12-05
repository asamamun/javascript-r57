import {Login} from './login.js';
export function validateForm(){
            document.getElementById("emailerror").innerHTML = "";
            document.getElementById("passworderror").innerHTML = "";
            let em = document.getElementById("email").value;
            let pass = document.getElementById("pass").value;
            let l = new Login(em, pass);
            let returnval = l.validate();
            console.log(returnval)
            if(returnval.e){
                for (const key in returnval.message) {
                   document.getElementById(key).innerHTML = returnval.message[key]; 
                }
            }
            else{
                alert("Form validation success")
            }
        }