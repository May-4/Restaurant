// ********************** Calculate Part***************************
// Add Item to Checkout Min
    window.addEventListener("load",checkout_mini_item);

    function checkout_mini_item(){
        let checkout_output= JSON.parse(sessionStorage.getItem("store_checkout_data"));
        let checkout_mini= document.querySelector(".checkout_mini");
        if(!checkout_output){
            checkout_mini.innerHTML= `
                <div class="fs-4 text-success text-center mt-5"> There is No Item </div>
            `;
        }

        let product_detail_arr= checkout_output.product_row_arr;
        for(let i=0; i<product_detail_arr.length; i++){
            let item= product_detail_arr[i];
            checkout_mini.innerHTML+= `
                <div class="row checkout_item py-3 text-end d-flex justify-content-center align-items-end">
                    <div class="col-5">
                    <div class="checkout_item_name fs-6 text-danger text-center">
                        ${item.name}
                    </div>
                    <div class="checkout_item_img">
                        <img src="${item.img}" alt="" class="img-fluid">                      
                    </div>                   
                    </div>                
                    <div class="col-3 px-0">
                    <div class="checkout_item_quantity px-0">
                        <span class="quantity">  ${item.quantity} </span>
                    </div>
                    </div>
                    <div class="col-4 px-0">
                        <div class="checkout_item_subtotal ">
                            ${item.subtotal}K
                        </div>
                    </div>
                </div>
                <hr class="mb-0">

            `;

        }

        
        calc_price( checkout_output.total_price);
    }

// Calculate Price
    function calc_price(subtotal){
        let subtotal_vall= document.querySelector(".allSubtotal_amount_value");
        subtotal_vall.innerHTML= subtotal;

        let ship_val= document.querySelector(".ship_amount_value");
        let tax_val= document.querySelector(".tax_amount_value").innerHTML;
        let allTotal_val= document.querySelector(".alltotal_amount_value");

        //If Total is greater than or eqaul Shippin_cost , shippin is Free
        let ship_free= parseInt( document.querySelector(".ship_free").innerHTML );
        console.log(ship_free);
        
        if( subtotal>= ship_free ){
            ship_val.innerHTML= "0";           
            allTotal_val.innerHTML= parseFloat(subtotal_vall.innerHTML)+parseFloat(tax_val);
            return;
        }
        allTotal_val.innerHTML= parseFloat(subtotal_vall.innerHTML)+
                                parseFloat(ship_val.innerHTML)+parseFloat(tax_val);
    
    }







// ********************** errror Message***************************
    // For  Message
    const form = document.querySelectorAll('.form');
    const button = document.getElementById('nextpayment');
    const email = document.getElementById('email');
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const address1 = document.getElementById('address1');
    const city = document.getElementById('city');
    const phone = document.getElementById('phone');

    let errormessage= document.querySelectorAll(".errormessage");    
    let msg_arr;
    
    button.addEventListener('click',function(){
        msg_arr=[];
        
        !email.value? showerror(email,'Email is required',0): showsuccess(email);
        !firstname.value? showerror(firstname,'Firstname is required',1): showsuccess(firstname);
      
        !lastname.value? showerror(lastname,'Lastname is required',2): showsuccess(lastname);
        !address1.value? showerror(address1,'address1 is required',3): showsuccess(address1);

        !city.value? showerror(city,'City is required',4): showsuccess(city);
        !phone.value? showerror(phone,'Phone Number is required',5): showsuccess(phone);
        
        if(msg_arr.length!=0){
            remove_dialog()
        }else{
            console.log(msg_arr.length);
            add_dialog()
        }
    });
    
    function showerror(input,message,id){
        const form = input.parentElement;
        form.className = "form error"; 
       
        errormessage[id].innerText = message;       
        msg_arr.push(message);              
    }
    
    function showsuccess(input){
        const form = input.parentElement;
        form.className = "form success";
        // formcontrol.classList.remove('error');
        // formcontrol.classList.add('success');
        errormessage.forEach(msg => {
            msg.innerText="";
        });
    }
    function remove_dialog(){
        let modal= document.querySelector(".modal");
        modal.classList.remove("show");
        modal.style.display="none";

        let backdrop= document.querySelector(".modal-backdrop");
        backdrop.classList.remove("modal-backdrop");
    }
   
    function add_dialog(){
        let modal= document.querySelector(".modal");
        modal.classList.add("show");
        modal.style.display="block";

        let body= document.body;
        let div= document.createElement("div");
        div.classList.add("modal_place");
        body.append(div);
        // body.style.position="fixed";
        
        
    }
    let btn_close= document.querySelector(".modal-header> .btn-close");
    btn_close.addEventListener("click",()=>{
        let modal= document.querySelector(".modal_place");
        modal.classList.remove("modal_place");
        // body.style.position="relative";
    })













// ********************** Promo Code Part***************************

 // For payment Method 
 let card_radio =document.getElementById("card_radio");
 let paypal_radio= document.getElementById("paypal_radio");

 let form_card= document.querySelector(".form_card");
 let form_paypal= document.querySelector(".form_paypal");
 
 card_radio.addEventListener("click",()=>{
   form_card.classList.remove("d_none");
   form_card.classList.add("d_block");
   form_paypal.classList.add("d_none");
 })

 paypal_radio.addEventListener("click",()=>{
   form_card.classList.add("d_none");
   form_paypal.classList.remove("d_none");
   form_paypal.classList.add("d_block");
 })

// For Promo Code
const code = document.querySelector('#code'),
     codeinput = document.querySelector('#procode'),
     submit = document.querySelector('#submit'),
     message1 = document.querySelector('.message1'),
     message2 = document.querySelector('.message2');

// Promo code value
let min = 1000,
   max = 9999,
   writeleft = 3,
   truecode = 3137;

   submit.addEventListener('click',function(){
     let code = parseInt(procode.value);
     // console.log(code);


     if(code < min || code > max || isNaN(code)){
     // message2.innerText = `Please Enter A Correct Code`;
       setmessag2(`Please Enter A Correct Code`,'red');
       
     }

     if(code === truecode){
     // You got a promotion

     // disabled input
     codeinput.disabled = true;
     codeinput.style.borderColor = "green";
     message1.innerText = `You got a promotion`;

     setmessage1(`You got a promotion`,'green');

   }
     
   });

   // Message
     function setmessage1(msg,col){
         message1.textContent = msg ;
         message1.style.color = col;

         // setTimeout(function(){
         //  message1.textContent = ' ';
         // },2000);
     }



   // function setmessage

   function setmessag2(msg,col){
     
     message2.textContent = msg;
     message2.style.color = col;

     setTimeout(function(){
       message2.textContent =' ';
     },1000);

   }    