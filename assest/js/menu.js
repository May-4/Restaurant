
// Go to More Detail page when more_btn click
    let mocha_btn= document.querySelector(".menu_more #mocha");
    mocha_btn.addEventListener("click",()=>{
        window.location.href="menu_detail.html";
    })
// Change Dollar($) to Kyat symbol(K)
    window.addEventListener("load",()=>{
        let dollars= document.querySelectorAll(".dollar_sign");
        dollars.forEach(dollar=>{
            dollar.innerHTML="K";
        })
    })
// Active And Change Page When Click menu navbar
    let nav_items= document.querySelectorAll(".menu_nav_item");
    nav_items.forEach(item=>{
        item.addEventListener("click",()=>{
            active_link(item); 

            let get_id=item.getAttribute("id");
            let get_all_href = document.querySelectorAll(".card[href]");

            show_card(get_all_href , get_id);
        })
    })
    function  active_link(nav_link) { 
        for(let i=0;i<nav_items.length;i++){
            let item=nav_items[i];
            item.classList.remove("menu_navbar_active");
        } // Remove (.menu_navbar_active ) from other nav_link
        nav_link.classList.add("menu_navbar_active");
        // Add .menu_navbar_active to the current link
    }    
    function show_card(all_href , get_id){
        all_href.forEach(href=>{
            for(let i=0;i< all_href.length;i++){
                let item= all_href[i];
                item.classList.add("d_none");
            }
        })
        let get_href= document.querySelector(`.card[href='#${get_id}']`);
        get_href.classList.remove("d_none");
        get_href.classList.add("d_block");
    }
    
//  Show Mini Cart page when click fas-cart-plus
    function toShow_miniCart(){
        let add_icons =document.querySelectorAll(".menu_addIcon");
        add_icons.forEach( add_icon=>{
            add_icon.addEventListener("click",()=>{                
                if(sessionStorage.getItem("user_name")){
                    check_count();
                }             
            })
        })
        function check_count(){
            let mini_cart_wrap= document.querySelector(".mini_cart_wrapper");
            let no_item= document.querySelector(".mini_cart_page> .no_item");
                
            mini_cart_wrap.classList.remove("d_none");
            mini_cart_wrap.classList.add("d_block");
            no_item.classList.add("d_none");   
            
        }
    }
    toShow_miniCart()
    
   