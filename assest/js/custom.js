console.log("a");
// show Navbar when scroll reach about page
    window.addEventListener("scroll",()=>{
        let navbar= document.querySelector(".navbar_section");
        if(window.pageYOffset >= window.outerHeight-200){
            navbar.classList.add("position_fixed");
        }else{
            navbar.classList.remove("position_fixed");
        }
    })

// Navbar link active change when click link item(nav_link)
    let nav_links= document.querySelectorAll(".navbar_link");
    nav_links.forEach( nav_link=>{
        nav_link.addEventListener("click",()=>{
            active_link(nav_link);
        }) 
    });
    function  active_link(nav_link) { 
        for(let i=0;i<nav_links.length;i++){
            let item=nav_links.item(i);
            item.classList.remove("active");
        } // Remove .active from other nav_link
        nav_link.classList.add("active");
        // Add .active to the current link
    }

// Navbar link active change when scroll 
    let sections= document.querySelectorAll("section");
    window.addEventListener("scroll",scroll_active);
    function scroll_active( ) {
        let offsetY= window.pageYOffset+300;
        sections.forEach( section => {
            let get_id=`${section.getAttribute("id")}`;
            let offset_top =section.offsetTop;
            let offset_height= section.offsetHeight;

            let link=document.querySelector(`.navbar_link[href='#${get_id}']`);
            if(offsetY > offset_top && offsetY <= offset_top+offset_height){
               // console.log(link);
                active_link(link);// အပေါ်မှာ ရေးထားတဲ့ function
            }

            // console.log(`${get_id} is context height = ${offset_height}
            // and distance from top is = ${offset_top}!! 
            // And Current scroll is= ${offsetY-300}`);

        });
    } 

// To Top Btn

//User Acc block when Login Btn Click 
let login= document.querySelector(".acc_login");
/*
login.addEventListener("click",()=>{
    let user= document.querySelector(".acc_user");
    login.classList.add("d_none");
    user.classList.remove("d_none");
    user.classList.add("d_block");
})*/