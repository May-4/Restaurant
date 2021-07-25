
// Remove padding when cart_item quantity is at most 2
    let carts_items = document.querySelectorAll(".mini_cart_item");
    if(carts_items.length <=2 ){
        carts_items.forEach(item=>{
            let isContain= item.children[1].classList.contains("mini_cart_item_detail");
            if(isContain){
                item.children[1].classList.add("px_0");
            }
        })
    }

// To Set data for Cart Table when click myOrder btn and View btn
    let view_btn= document.querySelector(".mini_cart_btn> .view_cart_btn");
    let myOrder=document.querySelector(".acc_detail> li> a");

    setCartData(myOrder)
    setCartData(view_btn) 
    
    function setCartData(get_btn){
        get_btn.addEventListener("click",()=>{    
            // Get Data from Mini Cart Form list and Store sessionStorage
            let cart_store=[];  console.log(get_btn);
            let cart_items= document.querySelectorAll(".mini_cart_item"); //many li

            let cart_img= document.querySelectorAll(".mini_cart_item_img > img");
            let item_name =document.querySelectorAll(".mini_cart_item_detail> .item_name");
            let item_count= document.querySelectorAll( ".mini_cart_item_detail>.item_amount > input[type='number']");
            let item_price = document.querySelectorAll( ".item_price>.amount");


            // Add Cart item Data to Obj 
            for(let index=0; index< cart_items.length; index++){

                let cart_item_data={ };        
                cart_item_data.img= cart_img[index].src;
                cart_item_data.name= item_name[index].innerHTML;
                cart_item_data.quantity= parseFloat(item_count[index].value);  
                cart_item_data.price= item_price[index].innerHTML;
                // console.log(cart_item_data);

                // Add Data obj to Array
                cart_store[index] =cart_item_data;        
                
            }
            console.log(cart_store);

            // Convert Cart Store Array to Json Strin cauz ---storage can only access String
            let cart_store_json = JSON.stringify( cart_store );

            sessionStorage.setItem("cart_item_data",cart_store_json);
            console.log("success cart_store json");
        })
    }
    
    // sessionStorage.removeItem("cart_item_data");
    