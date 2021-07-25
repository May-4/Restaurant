// Dropdown form acc menu
    // For navbar Down icon in User acc
    let dropdown_btn=document.querySelector(".dropdown_icon");
    let acc_detail=document.querySelector(".acc_detail");    
    dropdown_btn.addEventListener("click",()=>{
        drop_menu(acc_detail)
    });

    // For navbar Cart Icon
    let cart_icon =document.querySelector(".cart_icon");
    let mini_cart =document.querySelector(".mini_cart_page");
    cart_icon.addEventListener("click",()=>{
        drop_menu(mini_cart)
    });
    
    //For Cart Close Button
    
    let close_icon = document.querySelector(".mini_cart_header>.close_btn");
    close_icon.addEventListener("click",()=>{
        let mini_cart=document.querySelector(".mini_cart_page");
        drop_menu(mini_cart);
    });

    function drop_menu(acc){
        let hide = acc.classList.contains("hide_menu");          
        hide? add_block(acc) : add_remove(acc);
    }
    function add_block(item){
        item.classList.remove("d_none","hide_menu");
        item.classList.add("d_block");
    }
    function add_remove(item){
        item.classList.remove("d_block");
        item.classList.add("d_none","hide_menu");
    }
    