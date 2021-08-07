
// //For Survey Form

const survey = document.getElementById('survey');
const end = document.querySelector('.end');
const options = document.querySelectorAll('.option1');

const questions = document.querySelectorAll('.q1');

const removeBtn = document.querySelector('.remove_btn');


//  console.log(questions.length);

//For Remove questions
removeBtn.addEventListener('click',()=>{

    survey.style.display = 'none';
    end.style.display = 'block';
    })
    //For Change Questions
    var index = 0;


    options.forEach((option) =>{

    // console.log(option);

    option.addEventListener('click',()=>{

        
        if(index < questions.length-1){


            var first = questions.item(index);
            var second = questions.item(index+1);

            // console.log(first);


            first.style.display = "none";

            second.style.display = "block";

        // first.classList.add('d_none');
        // second.classList.add('d-block');

            index++;

        }else{


            survey.classList.add('d-none');
            end.classList.add('active');
            
        }
        
    });
});