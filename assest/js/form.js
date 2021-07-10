// <!-- For Password Show / Hide -->    
    // for login_in form
    let input_pwd= document.getElementById("pwd");
    let eye= document.querySelector("#eye .fa");
    eye.addEventListener("click",()=>{
        hide_show_pwd(input_pwd,eye);
    });
    // for Sing_up form
    let sing_pwd= document.getElementById("singup_pwd");
    let sing_eye= document.querySelector("#singup_eye .fa");
    sing_eye.addEventListener("click",()=>{
        hide_show_pwd(sing_pwd,sing_eye);
    })

    function hide_show_pwd(pwd,eye){
        console.log (pwd.type);
        console.log(eye.classList); 

        let is_contain= eye.classList.contains("fa-eye-slash");
        if(pwd.type=="password" && is_contain){
            pwd.type="text";
            eye.classList.remove("fa-eye-slash");
            eye.classList.add("fa-eye");
        }else{
            pwd.type="password";
            eye.classList.remove("fa-eye");
            eye.classList.add("fa-eye-slash");
        }
    }
// <!-- End Password Show / Hide -->

// <!-- For Create Acconunt and change Singup form-->    
    let singup_link= document.querySelector(".singup_link");
    let login_form= document.querySelector(".login_form");
    let singup_form= document.querySelector(".singup_form");
    console.log(singup_link);
    singup_link.addEventListener("click",()=>{
        login_form.classList.add("d_none");
        singup_form.classList.add("d_block");
    })    
// <!-- End Create Acconunt and change Singup form-->