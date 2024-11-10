const question_one_btn_element = document.querySelector(".js-question-one-btn");
const question_two_btn_element = document.querySelector(".js-question-two-btn");
const question_three_btn_element = document.querySelector(".js-question-three-btn");
const question_four_btn_element = document.querySelector(".js-question-four-btn");


const answer_one_element = document.querySelector(".js-answer-1");
const answer_two_element = document.querySelector(".js-answer-2");
const answer_three_element = document.querySelector(".js-answer-3");
const answer_four_element = document.querySelector(".js-answer-4");

const answers = ["Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."," Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.", "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!","The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."]

function onClickQuestionOneBtn()
{
  if(question_one_btn_element.innerHTML == '+')
  {  
    question_one_btn_element.innerHTML = '-';
    question_one_btn_element.classList.remove("question-btn-clicked");
    answer_one_element.innerHTML = answers[0];
  }
  else
  {  
    question_one_btn_element.classList.add("question-btn-clicked");
    question_one_btn_element.innerHTML = '+';
    answer_one_element.innerHTML = "";
  }
}


function onClickQuestionTwoBtn()
{
  if(question_two_btn_element.innerHTML == '+')
  {  
    question_two_btn_element.innerHTML = '-';
    question_two_btn_element.classList.remove("question-btn-clicked");
    answer_two_element.innerHTML = answers[1];
  }
  else
  {  
    question_two_btn_element.classList.add("question-btn-clicked");
    question_two_btn_element.innerHTML = '+';
    answer_two_element.innerHTML = "";
  }
}

function onClickQuestionThreeBtn()
{
  if(question_three_btn_element.innerHTML == '+')
  {  
    question_three_btn_element.innerHTML = '-';
    question_three_btn_element.classList.remove("question-btn-clicked");
    answer_three_element.innerHTML = answers[2];
  }
  else
  {  
    question_three_btn_element.classList.add("question-btn-clicked");
    question_three_btn_element.innerHTML = '+';
    answer_three_element.innerHTML = "";
  }
}

function onClickQuestionFourBtn()
{
  if(question_four_btn_element.innerHTML == '+')
  {  
    question_four_btn_element.innerHTML = '-';
    question_four_btn_element.classList.remove("question-btn-clicked");
    answer_four_element.innerHTML = answers[2];
  }
  else
  {  
    question_four_btn_element.classList.add("question-btn-clicked");
    question_four_btn_element.innerHTML = '+';
    answer_four_element.innerHTML = "";
  }
}