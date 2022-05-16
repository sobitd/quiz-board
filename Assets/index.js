//Selecting elements for DOM manipulation
const userAnswers = document.getElementById("userForm")

const question = document.getElementById("question")
const questionOne = document.getElementById("questionOne")
const questionTwo = document.getElementById("questionTwo")

const choices = document.querySelectorAll(".choice")
const answerOneText = document.getElementById("answerOneText")
const answerTwoText = document.getElementById("answerTwoText")
const answerThreeText = document.getElementById("answerThreeText")
const answerFourText = document.getElementById("answerFourText")
const answerFiveText = document.getElementById("answerFiveText")
const answerSixText = document.getElementById("answerSixText")
const answerSevenText = document.getElementById("answerSevenText")
const answerEightText = document.getElementById("answerEightText")
const correct = ""
const currentQuestion = 0
const submit = document.getElementById("submit-button")
const restart = document.getElementById("restartQuiz")

//setting up the questions array where DOM will be used to populate the HTML elements
var questionsArray = [{
        question: "What is the shortform of HTML?",
        answerOne: "HTML",
        answerTwo: "HMLT",
        answerThree: "MLHT",
        correct: "answerOne",
    },
    {
        questionOne: "What is the other name for Javascript?",
        answerFour: "ECMAscript",
        answerFive: "JS",
        answerSix: "I don't know",
        correct: "answerFour",
    },
    {
        questionTwo: "Is C++ a low level language?",
        answerSeven: "Yes",
        answerEight: "No",
        correct: "answerSeven",
    },
];

//Function to populate the html form with questions and answers that a user chooses

//the currect question position in the array

function populateQuiz() {
    var qn = questionsArray[0];
    question.innerHTML = qn.question;
    answerOneText.innerHTML = qn.answerOne;
    answerTwoText.innerHTML = qn.answerTwo;
    answerThreeText.innerHTML = qn.answerThree;


    var qn = questionsArray[1];
    questionOne.innerHTML = qn.questionOne;
    answerFourText.innerHTML = qn.answerFour;
    answerFiveText.innerHTML = qn.answerFive;
    answerSixText.innerHTML = qn.answerSix;

    var qn = questionsArray[2];
    questionTwo.innerHTML = qn.questionTwo;
    answerSevenText.innerHTML = qn.answerSeven;
    answerEightText.innerHTML = qn.answerEight;

    if(choices.correct){

    }
}

populateQuiz();

//This displays results on the results page after user clicks submit

submit.addEventListener('click', displayResults);

function displayResults(){
    window.open('Assets/results.html', '_self');

    return displayResults;
};


//function to check on the correctness of user's choice

function unselectedChoice() {
    choices.forEach(choices => choices.checked = false)
}

function selectedChoice() {
    choices.forEach(choice => {
        if (choice.checked) {
            choice = choice.id
        }
    })
    return choices
}
