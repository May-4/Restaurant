//For menu page
const specialbtn = document.getElementById('specialbtn');
const latestbtn = document.getElementById('latestbtn');
const bestbtn = document.getElementById('bestsellersbtn');

const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const card3 = document.querySelector('.card-3');
// console.log(cards);

// var index = 0 ;

specialbtn.addEventListener('click',()=>{

    // console.log('df');
    card1.classList.remove('d_none');
    card1.classList.add('d_block');

    card2.classList.remove('d_block');
    card2.classList.add('d_none');

    card3.classList.remove('d_block');
    card3.classList.add('d_none');

    
    console.log(card1);
    console.log(card2);
    console.log(card3);


});

latestbtn.addEventListener('click',()=>{


    card1.classList.remove('d_block');
    card1.classList.add('d_none');

    card2.classList.remove('d_none');
    card2.classList.add('d_block');

    card3.classList.remove('d_none');
    card3.classList.add('d_none');


    // console.log(card1);
    // console.log(card2);
    // console.log(card3);

});

bestbtn.addEventListener('click',()=>{

    
    card1.classList.remove('d_block');
    card1.classList.add('d_none');

    card2.classList.remove('d_block');
    card2.classList.add('d_none');
    
    card3.classList.remove('d_none');
    card3.classList.add('d_block');

   
   
    // console.log(card1);
    // console.log(card2);
    // console.log(card3);
});