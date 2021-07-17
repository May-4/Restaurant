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

// Slider for feedback
    let slide_row=document.querySelector(".slide_row");
    let slide_icons=document.querySelectorAll(".slide_icon .icon");

    slide_icons.forEach(icon=>{
        icon.addEventListener("click",()=>{
            for(let i=0;i<slide_icons.length;i++){
                slide_icons[i].classList.remove("icon_active");
            }
            icon.classList.add("icon_active");
        })
    }); // Add .active_icon to Icon
    for(let j=0;j<slide_icons.length;j++){
        slide_icons[j].onclick= function (params) {
            let num= j*1079; // 1079 is width of slide_col
            slide_row.style.transform=`translate(-${num}px)`;
            return;
        }
    } // Slide


// Add Data to Copyrigt in Footer Page
    const year=document.getElementById("year");
    year.textContent= new Date().getFullYear();
   
// top btn
    // Add topbtn
    var mybutton = document.getElementById("mybtn");

    window.onscroll = function() {
    scrollFunction()
    };

    function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    };

    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    };