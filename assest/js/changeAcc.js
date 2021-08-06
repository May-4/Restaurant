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
    function logout(){
        let logout= document.querySelector(".logout");
        logout.addEventListener("click",( )=>{

            let login_acc= document.querySelector(".acc_login");
            let user_acc = document.querySelector(".acc_user");

            let response= confirm("Are You Sure to Log Out!");
            if(response){
                
                sessionStorage.removeItem("user_name");

                login_acc.classList.remove("d_none");
                user_acc.classList.remove("flex_center");
                user_acc.classList.add("d_none");

                remove_itemData()

            }
        })
    }
    logout();

    

    // Badge
    function remove_itemData(){
        let badge_get =document.querySelector(".badge");

        if(!sessionStorage.getItem("user_name")){
            console.log("no user name");
            sessionStorage.removeItem("badge_count");
            sessionStorage.removeItem("cart_item_data");
            sessionStorage.removeItem("cart_get_poc");
            

            // remove_table(badge_get)
            remove_badge_count(badge_get)
            remove_check_icon()
            
        }    
        
    }
   
    function remove_badge_count(badge_get){
        let mini_cart_wrap= document.querySelector(".mini_cart_wrapper");
        let no_item= document.querySelector(".mini_cart_page> .no_item");
        
        if( !sessionStorage.getItem("badge_count")){
            mini_cart_wrap.classList.add("d_none");
            no_item.classList.remove("d_none");
            no_item.classList.add("d_block");         
        }
        badge_get.innerHTML=" ";
    } remove_badge_count();

    function remove_check_icon(){
        let cart_icons=document.querySelectorAll(".menu_addIcon> i");
        cart_icons.forEach(icon => {
            let circle= icon.classList.contains("fa-check-circle");
            if(circle){
                icon.classList.remove("fa-check-circle");
                icon.classList.add("fa-cart-plus");
            }
        });
    }
   



    
