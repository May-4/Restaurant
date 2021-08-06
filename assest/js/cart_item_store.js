if(document.readyState == 'loading'){

    document.addEventListener('DOMContentLoaded',ready);

}else{

    ready();

}
function ready(){

    var removeCartItemButtons = document.getElementsByClassName('remove_item_btn');
    // console.log(removeCartItemButtons);
    for(var i = 0;i < removeCartItemButtons.length; i++){

        var button = removeCartItemButtons[i];
        button.addEventListener('click',removeCartItems);
    }

    var quantityInputs = document.getElementsByClassName('item_quantity');

    for(var i =0; i < quantityInputs.length; i++){

        var quantityInput = quantityInputs[i];
        quantityInput.addEventListener('change',quantityChange);
    }

    // var addtoCartButtons = document.getElementsByClassName('menu_addIcon');

    // for(var i = 0 ; i < addtoCartButtons.length ; i ++){
    //     var addtoCartButton = addtoCartButtons[i];
    //     addtoCartButton.addEventListener('click', addtoCartItems);
    // }
}


// For remove Cart Items
function removeCartItems(event){

    var buttonClicked = event.target;
        // console.log(buttonClicked);
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal();

}

// For Quantity Changes

function quantityChange(event){

    var input = event.target;

    if(isNaN(input.value) || input.value <= 0){

        input.value = 1;
    }
    updateCartTotal();
}

// For Adding Items

function addtoCartItems(event){

    var cartIcon = event.target;
    var shopItem = cartIcon.parentElement.parentElement.parentElement;

    var image = shopItem.getElementsByClassName('menuImage')[0].src;
    // var image = shopItem.querySelector(".menu_card_top> .menu_img> img");
    var title = shopItem.getElementsByClassName('menu_item_name')[0].innerText;
    var price = shopItem.getElementsByClassName('menu_item_price')[0].innerText;

    // console.log(image,title,price);
    additemsToCart(image,title,price);
    updateCartTotal();
}

// For Add to  Cart
function additemsToCart(image,title,price){

    var cartRow = document.createElement('div');
    cartRow.classList.add('mini_cart_item');

    var cartItems = document.getElementsByClassName('mini_cart_items_list')[0];

    var cartItemNames = cartItems.getElementsByClassName('menu_item_name');
    
    for(var i = 0 ; i < cartItemNames.length ; i++){

        if(cartItemNames[i].innerHTML == title){

            alert('This menu is already added to the cart!!');
            return
        }
    }
    var cartContent = `

        <div class="mini_cart_item_img">

            <img src="${image}" alt="">
                
        </div>
        <div class="mini_cart_item_detail">
                <h4 class="item_name"> ${title}</h4>
                <div class="flex_between item_amount">
                    <input type="number" value="1"
                            min="1" max="50" id="item_quantity" class="item_quantity">
                    <span class="multi_icon">
                            <i class="fas fa-times"></i>
                    </span>
                    <div class="item_price">
                        <span class="amount"> 
                                ${price}</span>
                        <span class="dollar_sign"> K</span>
                     </div>
                </div>
                <span class="remove_item_btn">
                        <i class="fas fa-times"></i>
                </span>
            </div>
    `
    cartRow.innerHTML = cartContent;
    cartItems.append(cartRow);

    cartRow.getElementsByClassName('remove_item_btn')[0].addEventListener('click',removeCartItems);
    cartRow.getElementsByClassName('item_quantity')[0].addEventListener('change',quantityChange);
}

// For Update Add to Cart Total Price
function updateCartTotal(){

    let miniCartList = document.getElementsByClassName('mini_cart_items_list')[0];
    let miniCartItems = miniCartList.getElementsByClassName('mini_cart_item');

    let subTotal = 0;

    // console.log(miniCartItems);
    for( i = 0; i < miniCartItems.length ; i++)
    {
        let miniCartItem = miniCartItems[i];
        let miniCartPrice = miniCartItem.getElementsByClassName('amount')[0];
        let miniCartQuantity = miniCartItem.getElementsByClassName('item_quantity')[0];

        let priceElement = parseFloat(miniCartPrice.innerText);
        let quantityValue = miniCartQuantity.value;

        subTotal = subTotal + (quantityValue * priceElement);

        subTotal = Math.round(subTotal * 100) / 100;

        // console.log(subTotal);
        
    }
    let finalTotal = document.querySelector('.subtotal_price');
        finalTotal.innerText = '$'+ subTotal;
    
}


