// from Cart_table
    let shop_table =document.querySelector(".shop_table> tbody");

    let table =document.querySelector(".shop_table");
    let msg= document.querySelector(".no_item_msg");
    let no_count =sessionStorage.getItem("badge_count");
// Get data from Storage (Cart_item_data)
    if(no_count){
        table.classList.remove("d_none");
        table.classList.add("d_table");
        msg.classList.add("d_none");
        
        // Get data from Storage (Cart_item_data)
        let get_cart_data= JSON.parse( sessionStorage.getItem("cart_item_data") );
        console.log( get_cart_data);
        // Add Data
        for(let index=0; index<get_cart_data.length; index++){
            shop_table.innerHTML += `
                <tr class="product_detail">
                    <td  class="product_thumbnail">
                        <img src="${get_cart_data[index].img}" alt="">
                    </td>
                    <td  class="product_name">
                        <p> ${get_cart_data[index].name} </p>
                    </td>
                    <td  class="product_price">
                        <p class="amount">
                            <span class="dollar">$</span>
                            <span class="amount_value">${get_cart_data[index].price}</span>
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
                            <span class="dollar">$</span>
                            <span class="amount_value"> 10</span>
                        </p>
                    </td>
                    <td  class="product_remove">
                        <p class="close_btn"> 
                            <i class="fas fa-times"></i>
                        </p>
                    </td>
                </tr>
            `;
        }
    }else{

        table.classList.remove("d_table");
        table.classList.add("d_none");
        msg.classList.remove("d_none");
        msg.classList.add("d_flex");
    }
    
    let product= document.querySelectorAll(".product_detail");
    let price= document.querySelectorAll(".amount>.amount_value");
    let quantity= document.querySelectorAll(".quantity> input[type='number']");
    let subtotal_item= document.querySelectorAll(".subtotal>.amount_value");
    
    let all_subtotal= document.querySelector(".allSubtotal >p >.amount_value");
    let tax= document.querySelector(".tax >p >.amount_value");
    let total= document.querySelector(".total >p >.amount_value");

// Work Calc When Window is Load and Can see at first
    window.addEventListener("load",()=>{
        let subtotal_int_first=0; 
        common_calc( subtotal_int_first)
    })

// Work Calc When Tbody(shop_table) is Change and user  click 
    function shop_cart(){
        shop_table.addEventListener("change",()=>{        
            all_subtotal.innerHTML=" "; let subtotal_int =0;
            common_calc( subtotal_int);      
        })
    }
    shop_cart();

// Remove Btn and Upadate Price
    let remove_btns= document.querySelectorAll(".product_remove> .close_btn");
    for(let i=0;i< remove_btns.length;i++){   
        
        remove_btns[i].addEventListener("click",()=>{ 
            let product_row= product[i];
            remove_item(i, product_row);            
        })
    }
    


// Common Function // This function call other Function
    function common_calc( subtotal_int){
        for( let i=0; i<product.length; i++){
            // Change Subtoatl item when  input Change
            subtotal_item[i].innerHTML= subtotal_each(i);

            // Change Subtoatl all_item when input Change
            let subtotal_new= subtotal_item[i].innerHTML;
            subtotal_int= all_subTotal(subtotal_int , subtotal_new);
        }
    }

    function subtotal_each(index){
        let result= price[index].innerHTML * parseFloat(quantity[index].value);
        return result.toFixed(2);
    }
    function all_subTotal(subtotal_int , subtotal_new){
        subtotal_int+= parseFloat(subtotal_new);
        all_subtotal.innerHTML =subtotal_int.toFixed(2);

        total_money( all_subtotal.innerHTML);
        return subtotal_int;
        // console.log(subtotal_int);
    }
    function total_money( all_subtotal){        
        let total_amount= parseFloat( all_subtotal )+ parseFloat( tax.innerHTML );
        total.innerHTML=total_amount.toFixed(2);
    }

    function remove_item(index,product_row){
        let msg= confirm("Are u sure");
        if(msg){
            let product_subPrice=  subtotal_item[index];
            product_row.remove();
            update_price(product_subPrice);        
        }
    }
    function update_price(product_subPrice){
        console.log( all_subtotal);
        let result = parseFloat(all_subtotal.innerHTML) - 
                                parseFloat(product_subPrice.innerHTML)
        
        all_subtotal.innerHTML = result.toFixed(2);
        total_money(all_subtotal.innerHTML);
    }