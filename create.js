const questions = [];

const addBtn = document.getElementById("addQuestion");
const form = document.getElementById("quizForm");
const questionList = document.getElementById("questionList");

addBtn.addEventListener("click", () => {

const question = document.getElementById("question").value;

const options = [

document.getElementById("option1").value,

document.getElementById("option2").value,

document.getElementById("option3").value,

document.getElementById("option4").value

];

const correct = document.getElementById("correct").value;

if(question.trim()==="" || options.some(o => o.trim()==="")){

alert("Please enter the question and all 4 options.");

return;

}

questions.push({

question,

options,

correct

});

questionList.innerHTML += `
<div class="question-item">
${questions.length}. ${question}
</div>
`;

document.getElementById("question").value = "";
document.getElementById("option1").value = "";
document.getElementById("option2").value = "";
document.getElementById("option3").value = "";
document.getElementById("option4").value = "";

});

form.addEventListener("submit",(e)=>{

e.preventDefault();

if(questions.length === 0){

alert("Add at least one question before saving the quiz.");

return;

}

const quiz = {

id:"custom-" + Date.now(),

title:document.getElementById("quizTitle").value.trim(),

category:document.getElementById("category").value,

timer:document.getElementById("timer").value,

questions

};

let customQuizzes = [];

try{

customQuizzes = JSON.parse(localStorage.getItem("customQuizzes")) || [];

}catch(error){

customQuizzes = [];

}

customQuizzes.push(quiz);

localStorage.setItem("customQuizzes",JSON.stringify(customQuizzes));

alert("Quiz Saved Successfully!");

window.location.href="quiz_list.html";

});