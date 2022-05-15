//Declaring variables for DOM manipulation
const userAnswers = document.getElementById("userForm")
const question =  document.getElementById("question")
const choices = document.querySelectorAll(".choice")
const answerOneText = document.getElementById("answerOneText")
const answerTwoText = document.getElementById("answerTwoText")
const answerThreeText = document.getElementById("answerThreeText")
const submit = document.getElementById("submit-button")

//setting up the questions array where DOM will be used to populate the HTML elements
var questionsArray = [
    {
        question: "What is the shortform of HTML?",
        answerOne: "HTML",
        answerTwo: "HMLT",
        answerThree: "MLHT",
        correct: "answerOne",
    },
    {
        question: "What is the other name for Javascript?",
        answerOne: "ECMAscript",
        answerTwo: "JS",
        answerThree: "I don't know",
        correct: "answerOne",
    },
    {
        question: "Is C++ a low level language?",
        answerOne: "Yes",
        answerTwo: "No",
        correct: "answerOne",
    },
];

//Function to populate the html form with questions and answers that a user chooses

var lastQuizPosition = questionsArray.length - 1; //index starts from 0 so the - 1 is to find the last index in an array
var currentQuizPosition = 0; //the currect question position in the array

function showQuiz(){ 
    var qn = questionsArray[currentQuizPosition];
    question.innerHTML = qn.question;
    answerOneText.innerHTML = qn.answerOne;
    answerTwoText.innerHTML = qn.answerTwo;
    answerThreeText.innerHTML = qn.answerThree;
}

showQuiz();

//function to check on the correctness of user's choice

function unselectedChoice (){
    choices.forEach(choices => choices.checked = false)
}

function selectedChoice(){
    choices.forEach(choice => {
        if(choice.checked){
            choice = choice.id
        }
    })
    return choice
}

//when the submit button is clicked 
submit.addEventListener('click', )
