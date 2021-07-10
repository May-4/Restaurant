//For menu page
const foodbtn = document.getElementById('foodbtn');
const cakebtn = document.getElementById('cakebtn');
const drinkbtn = document.getElementById('drinkbtn');

const foodcard = document.getElementById('food');
const cakecard = document.getElementById('cake');
const drinkcard = document.getElementById('drink');

// console.log(drinkcard);
function clearcard(){

    drinkcard.style.zIndex = -1;
    drinkcard.style.opacity = 0;
    cakecard.style.zIndex = 0;
    cakecard.style.opacity=0;
    foodcard.style.zIndex = 1;

}
clearcard();

foodbtn.addEventListener('click',function(){

    // console.log("df");
    drinkcard.style.zIndex = -1;
    drinkcard.style.opacity = 0;
    cakecard.style.zIndex = 0;
    cakecard.style.opacity=0;
    foodcard.style.zIndex = 1;
    foodcard.style.opacity = 1;
    
});

cakebtn.addEventListener('click',function(){

    // console.log("df");
    drinkcard.style.zIndex = -1;
    drinkcard.style.opacity= 0;
    foodcard.style.zIndex = 0;
    foodcard.style.opacity = 0;
    cakecard.style.zIndex = 1;
    cakecard.style.opacity = 1;

});

drinkbtn.addEventListener('click',function(){

    // console.log("df");
    drinkcard.style.zIndex = 1;
    drinkcard.style.opacity = 1;
    foodcard.style.zIndex = 0;
    foodcard.style.opacity = 0;
    cakecard.style.zIndex = -1;
    cakecard.style.opacity =0;

});
   