
// sessionStorage.removeItem("cart_item_minus");
//     sessionStorage.removeItem("item");
//     sessionStorage.removeItem("cart_item");
//     sessionStorage.removeItem("badge_count");
//     localStorage.removeItem("cart_item_minus");
//     sessionStorage.removeItem("cart_get_poc");

// Check login_in and Count cart when icon is click
    let user_name = sessionStorage.getItem("user_name");

    let badge =document.querySelector(".badge");
    let addIcons= document.querySelectorAll(".menu_addIcon > i");  
    
    let get_badge= parseInt( sessionStorage.getItem("badge_count") );  
    
    if(get_badge){
        badge.innerHTML =get_badge;
    }else{
        get_badge=0;
    }  

//  Add empty array to Session Or Check Circle Icon and Get Position Array from Session
    if(sessionStorage.getItem("cart_get_poc")){
        let poc_data= JSON.parse(sessionStorage.getItem("cart_get_poc"));
        for(let i=0; i<poc_data.length; i++){
            let get_poc= poc_data[i];
            let hasClass= addIcons[get_poc].classList.contains("fa-cart-plus");       
            if(hasClass){
                addIcons[get_poc].classList.remove("fa-cart-plus");
                addIcons[get_poc].classList.add("fa-check-circle");
            }
        }
    }else{
        sessionStorage.setItem("cart_get_poc","[]");
    }

   
/*************************Click Addicon to add count in navbar cart **********************/
   for(let index=0; index < addIcons.length; index++){         
        
        let item= addIcons[index];        
        item.innerHTML= "icon";
        item.addEventListener("click",( e)=>{ 
            let user_name = sessionStorage.getItem("user_name");         
            if(!user_name){
                alert(" Please Login for your order");
                return;
            }  
            addItem(e,item,index,addArray_toSession);
           
        });   
    }


/*************************  Add Data From Menu Card to Mini_cart
 *                            And Add Badge Count in Navbar            *  * **************************** */


    function addItem(event, addIcon,index,addArray_toSession ){
        let stock= document.querySelectorAll(".menu_item_instock");
        let menu_stock= stock[index].lastElementChild.children[0];
        let out =menu_stock.innerHTML.toLowerCase().trim();

        // Check Out of Stock Item
        let has_menu_stock= stock[index].lastElementChild.classList.contains("menu_item_stock");
        if(has_menu_stock){
            // let get_span=stock[index].lastElementChild.innerHTML.trim();
            let test="out of stock";
            if(out===test){
                console.log(test);
                alert("Sorry, This item is Out of stock: Please! Choose another!");
                return;
            }
        }
        
        let hasClass= addIcon.classList.contains("fa-cart-plus");  
        if(hasClass){
            get_badge+= 1; 
            set_badge(get_badge);  
            badge.innerHTML =parseInt( sessionStorage.getItem("badge_count") );

            addIcon.classList.remove("fa-cart-plus");
            addIcon.classList.add("fa-check-circle");

            addtoCartItems(event); // From cart_item_store.js
        
        }else{
            alert("Your item is alerdy get in cart");
        }
        addArray_toSession(index);
       
       
    }
    
    function set_badge(get_badge){
        sessionStorage.setItem("badge_count",get_badge);
        console.log( sessionStorage.getItem("badge_count"));
    }


/************************* Get checked(selected) icon and save to Sesseion ** **************************** */

    function addArray_toSession (check_poc){ 
    // Get Array
       let get_data=JSON.parse( sessionStorage.getItem("cart_get_poc") );
    // new add data
       get_data.push(check_poc); 
    // Agian set Array
       sessionStorage.setItem("cart_get_poc", JSON.stringify(get_data) );
    }   


    






































    

