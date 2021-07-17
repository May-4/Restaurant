
// Go to More Detail page when more_btn click
    let mocha_btn= document.querySelector(".menu_more #mocha");
    mocha_btn.addEventListener("click",()=>{
        window.location.href="menu_detail.html";
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
    
// Check login_in and Count cart when icon is click
    let user_name = sessionStorage.getItem("user_name");

    let badge =document.querySelector(".badge");
    let addIcons= document.querySelectorAll(".menu_addIcon");
    count=1;
    addIcons.forEach(addIcon=>{ 
        addIcon.addEventListener("click",(event)=>{
            if(!user_name){
                alert(" Please Login for your order");
                return;
            }
            badge.innerHTML= count++;                
        })
    })
 
    