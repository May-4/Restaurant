const change_form = document.getElementById('changepwd_form');
const current_form = document.getElementById('currentpwd_form');

const curpassword = document.getElementById('currentpassword');
const nwpassword = document.getElementById('newpassword');
const cfnpassword = document.getElementById('confirmnpassword');
let user_pwd= sessionStorage.getItem("user_pwd");

current_form.addEventListener("submit",function(e){
    e.preventDefault();
    checkrequired([curpassword]);
    currentPwdMatch(curpassword);
});

change_form.addEventListener("submit",function(e){
	e.preventDefault();
	checkrequired([nwpassword,cfnpassword]);
	checkpasswordsmatch(nwpassword,cfnpassword);	
});

function checkrequired(inputarrs){
    // console.log(inputarrs);

    inputarrs.forEach(function(inputarr){
        // console.log(inputarr);
        // console.log(inputarr.value);  
        // console.log(inputarr.id);

        if(inputarr.value==''){          
            showerror(inputarr,`${getfieldname(inputarr)} is required`);
        }else{
            showsuccess(inputarr);
        }
    })
}
// Check current password and its work
function currentPwdMatch(current_pwd){
    let val=curpassword.value.trim();
    if(val!=user_pwd){
        showerror(current_pwd,"Please Enter Correct Password");
        return
    }
    change_form.classList.remove("d_none");
    change_form.classList.add("d_block");
    current_form.classList.add("d_none");
}
// Check Passwords Match for Change Password Form
function checkpasswordsmatch(input1,input2){
    if(!input1.value.trim() && !input2.value.trim()){
        return;
    }

    if(input1.value !== input2.value){
        showerror(input2,'Password do not match');
    }else{
        sessionStorage.setItem("user_pwd",input1.value);
        // alert("Saved Successfully");
        window.history.back();
    }
   
}



function showerror(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";

    const small = formcontrol.querySelector('small');
    small.innerText = message;
}
function showsuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
    // formcontrol.classList.remove('error');
    // formcontrol.classList.add('success');
}

// Get Field Name
function getfieldname(inputarr){
    return inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1);
}



