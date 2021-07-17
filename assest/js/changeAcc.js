// Show User Acc  when Login Btn Click 
    // from Index.html
    window.addEventListener("load",()=>{
        let login_acc= document.querySelector(".acc_login");
        let user_acc = document.querySelector(".acc_user");
        let user_name = document.querySelector(".acc_user .user");
        change_acc();
        
        function change_acc() {
            let get_name= sessionStorage.getItem("user_name");
            if(get_name){
                console.log(get_name);
                login_acc.classList.add("d_none");
                user_acc.classList.remove("d_none");
                user_acc.classList.add("flex_center");
        
                user_name.innerHTML= get_name;
            }else{
                login_acc.classList.remove("d_none");
                user_acc.classList.remove("flex_center");
                user_acc.classList.add("d_none");
            }
        }
    }) 