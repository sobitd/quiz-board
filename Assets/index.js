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