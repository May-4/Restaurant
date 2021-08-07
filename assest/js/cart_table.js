// from Cart_table
    let shop_table =document.querySelector(".shop_table> tbody");

    let table =document.querySelector(".shop_table");
    let msg= document.querySelector(".no_item_msg");
    let hasCount =sessionStorage.getItem("badge_count");

   

/************************* Get data from Storage (Cart_item_data)  And Set Data to Table 
*   **************************** */
    if(hasCount){
        table.classList.remove("d_none");
        table.classList.add("d_table");
        msg.classList.add("d_none");
        
        // Get data from Storage (Cart_item_data)
        let get_cart_data= JSON.parse( sessionStorage.getItem("cart_item_data") );
        // Add Data to Table
        for(let index=0; index<get_cart_data.length; index++){
            shop_table.innerHTML+=  `
                <tr class="product_detail">
                    <td  class="product_thumbnail">
                        <img src="${get_cart_data[index].img}" alt="">
                    </td>
                    <td  class="product_name">
                        <p> ${get_cart_data[index].name} </p>
                    </td>
                    <td  class="product_price">
                        <p class="amount">
                            <span class="amount_value">${get_cart_data[index].price}</span>
                            <span class="dollar">K</span>
                        </p>
                    </td>
                    <td  class="product_quantity">
                        <p class="quantity"> 
                            <input type="number" value="${get_cart_data[index].quantity}" 
                            min="1" max="50" id="">
                        </p>
                    </td>
                    <td  class="product_subtotal">
                        <p class="subtotal">                            
                            <span class="amount_value"> 10</span>
                            <span class="dollar">K</span>
                        </p>
                    </td>
                    <td  class="product_remove">
                        <p class="close_btn"> 
                            <i class="fas fa-times"> </i>
                        </p>
                    </td>
                </tr>
            `;            
        }
    }
    remove_table();
    
    

// Work Calc When Window is Load and Can see at first
    window.addEventListener("load",()=>{
        let subtotal_int_first=0; 
        common_calc( subtotal_int_first);       

    })

// Work Calculate Price When Tbody(shop_table) is Change and user  click 
    shop_table.addEventListener("change",()=>{   
        let all_subtotal= document.querySelector(".allSubtotal >p >.amount_value");     
        all_subtotal.innerHTML=" "; let subtotal_int =0;
        common_calc( subtotal_int);  

        
    })
  

// Remove Btn and Upadate Price
    let remove_btns= document.querySelectorAll(".product_remove> .close_btn"); 
    for(let i=0;i< remove_btns.length;i++){        
        // remove_btns[i].innerHTML= "close";       
         remove_btns[i].addEventListener("click",()=>{ 

            let product_row= remove_btns[i].parentElement.parentElement;
            let remove_subtotal= product_row.querySelector(".product_subtotal> .subtotal> .amount_value").innerHTML;
    
            remove_item(remove_subtotal,product_row);
        })
    }
 
    
// store data for Checkout  Page
    let check_btn= document.querySelector(".checkout_btn");
    check_btn.addEventListener("click",checkout_data);
    function checkout_data(){

        let  checkout_item={ }; 
        checkout_item.product_row_arr=[];

        // Remove လုပ်တာတွေရှိရင် row/tr က ပြောင်းလည်းသွား အာ့ကြောင့် table❤ row တွေကို ပြန်ခေါ်ပေးရ။
        let product_row= shop_table.children; // For product detail row <tr>
        for(let row=0; row< product_row.length; row++){
            let product_col_obj={};
            let product_col= product_row[row].children; // for <td>
            
            // Col/td  ထဲကနေ data အကုန်မထူတ်ချင်လို့  indexနဲ့ရေးလိုက်သည်။
            product_col_obj.img= product_col[0].querySelector(".product_thumbnail>img").src;
            product_col_obj.name= product_col[1].querySelector(".product_name> p").innerHTML;
            product_col_obj.quantity= product_col[3].querySelector(".quantity> input[type='number']").value;
            product_col_obj.subtotal= product_col[4].querySelector(".subtotal>.amount_value").innerHTML;
            
            checkout_item.product_row_arr[row] = product_col_obj;
        }

        let all_subtotal= document.querySelector(".allSubtotal >p >.amount_value");
        checkout_item.total_price= all_subtotal.innerHTML;

        let data_string= JSON.stringify(checkout_item);
        sessionStorage.setItem("store_checkout_data",data_string);

        let checkout_output= JSON.parse(sessionStorage.getItem("store_checkout_data"));
        console.log(checkout_output); 
    }







/*************************  Calculate Price  Part     **************************** */

    // Common Function // This function call other Function
    function common_calc( subtotal_int){

        let product= document.querySelectorAll(".product_detail");
        let subtotal_item= document.querySelectorAll(".subtotal>.amount_value");
        console.log(product);
        for( let i=0; i< product.length; i++){
            // Change Subtoatl item when  input Change
            subtotal_item[i].innerHTML= subtotal_each(i);

            // Change Subtoatl all_item when input Change
            let subtotal_new= subtotal_item[i].innerHTML;
            subtotal_int= all_subTotal(subtotal_int , subtotal_new);

        }
    }

    function subtotal_each(index){
        let price= document.querySelectorAll(".amount>.amount_value");
        let quantity= document.querySelectorAll(".quantity> input[type='number']");

        let result= price[index].innerHTML * parseFloat(quantity[index].value);

        // Change Storage value 
        let get_storage=JSON.parse( sessionStorage.getItem("cart_item_data") );
        get_storage[index].quantity= quantity[index].value;
        sessionStorage.setItem("cart_item_data",JSON.stringify(get_storage));
        
        return result.toFixed(2);
    }
    function all_subTotal(subtotal_int , subtotal_new){
        let all_subtotal= document.querySelector(".allSubtotal >p >.amount_value");
      
        subtotal_int += parseFloat(subtotal_new);
        all_subtotal.innerHTML =subtotal_int.toFixed(2);

        total_money( all_subtotal.innerHTML);
        return subtotal_int;
        // console.log(subtotal_int);
    }
    function total_money( all_subtotal){   
        let tax= document.querySelector(".tax >p >.amount_value");
        let total= document.querySelector(".total >p >.amount_value");  

        let total_amount= parseFloat( all_subtotal )+ parseFloat( tax.innerHTML );
        total.innerHTML=total_amount.toFixed(2);
    }


 /*************************  Remove  Part     **************************** */
    function remove_item(remove_subtotal,product_row){
        let msg= confirm("Are u sure want to delete this Item");
        if(msg){
            let name= product_row.querySelector(".product_name> p").innerHTML.trim();
            let product= document.querySelectorAll(".product_detail");
            
            product_row.remove();                        
            update_price(remove_subtotal); 
            // For Change Session
            for(let i=0; i<product.length; i++){
                let check_name= product[i].querySelector(".product_name> p").innerHTML.trim();
                if(name==check_name){
                    connect_session_forRemove(i); 
                    //To Get index for cart_item_data Storage
                }
            }
        }
        remove_table()
    }
    function update_price(product_subPrice){

        let all_subtotal= document.querySelector(".allSubtotal >p >.amount_value");
        console.log( all_subtotal);
        let result = parseFloat(all_subtotal.innerHTML) - 
                                parseFloat(product_subPrice)
        
        all_subtotal.innerHTML = result.toFixed(2);
        total_money(all_subtotal.innerHTML);
    }
    function connect_session_forRemove(index){

        let get_data=JSON.parse( sessionStorage.getItem("cart_item_data") ); 
        console.log(get_data.splice(index,1)); // remove data from session
        sessionStorage.setItem("cart_item_data", JSON.stringify(get_data));
        

        let badge =document.querySelector(".badge");
        let badge_count=sessionStorage.getItem("badge_count");
        if(badge_count !=0){
            badge_count =parseInt(badge_count)-1;
            badge.innerHTML= badge_count;
            sessionStorage.setItem("badge_count",badge_count);
        }     

        let checkout=JSON.parse( sessionStorage.getItem("store_checkout_data") ); 
        if(checkout){
            sessionStorage.removeItem("store_checkout_data");
        }
        
    }
    function remove_table(){
        if(shop_table.children.length==0){
            table.classList.remove("d_table");
            table.classList.add("d_none");
            msg.classList.remove("d_none");
            msg.classList.add("d_flex");
        }
    }