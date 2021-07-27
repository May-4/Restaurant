let checkout_output= JSON.parse(sessionStorage.getItem("store_checkout_data"));
console.log(checkout_output); // Object

let product_detail_arr= checkout_output.product_row_arr;
for(let i=0; i<product_detail_arr.length; i++){
    let item= product_detail_arr[i];
    console.log(`${item.img} , ${item.name}, ${item.quantity} , ${item.subtotal}`);
}
console.log(checkout_output.total_price);