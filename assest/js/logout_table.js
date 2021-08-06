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
    
    // Logout Acc
    // function logout(){
        let logout= document.querySelector(".logout");
        logout.addEventListener("click",()=>{

            let login_acc= document.querySelector(".acc_login");
            let user_acc = document.querySelector(".acc_user");

            let response= confirm("Are You Sure to Log Out!");
            if(response){
                
                sessionStorage.removeItem("user_name");

                remove_itemData(); 

                // login_acc.classList.remove("d_none");
                // user_acc.classList.remove("flex_center");
                // user_acc.classList.add("d_none");
                

            }
        })
    // }
    // logout();

    

    // Badge
    function remove_itemData(){
       
        if(!sessionStorage.getItem("user_name")){
            console.log("no user name");
            sessionStorage.removeItem("store_checkout_data");
            sessionStorage.removeItem("badge_count");
            sessionStorage.removeItem("cart_item_data");
            sessionStorage.removeItem("cart_get_poc");

            remove_table_logout();
        }    
        
    }
    function remove_table_logout(){

        // let cart_item= sessionStorage.getItem("badge_count");
        // if(!cart_item){
            
            let badge_get =document.querySelector(".badge");
            badge_get.innerHTML="";
            let table =document.querySelector(".shop_table");
            let msg= document.querySelector(".no_item_msg");

            table.classList.remove("d_table");
            table.classList.add("d_none");
            msg.classList.remove("d_none");
            msg.classList.add("d_flex");

            window.location.href="../../index.html";
            
        // }
        // console.log(cart_item+"remove_table");
    }