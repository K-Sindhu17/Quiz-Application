const questions = [
    {
        question: "Which type of JavaScript language is __?",
        answers: [
            {text: "Object-Oriented", correct: false},
            {text: "Object-Based", correct: true},
            {text: "Assembly-language", correct: false},
            {text: "High-level", correct: false},
        ]
    },

    {
        question: "Which one of the following also known as Conditional Expression?",
        answers: [
            {text: "Alternative to if-else", correct: false},
            {text: "Switch statement", correct: false},
            {text: "If-then-else statement", correct: false},
            {text: "immediate if", correct: true},
        ]
    },

    {
        question: `Which of the following is the correct output for the following JavaScript code: 
        var x=5,y=1  
        var obj ={ x:10}  
        with(obj)  {  
          alert(y)  
        }  `,
        answers: [
            {text: "1", correct: true},
            {text: "Error", correct: false},
            {text: "10", correct: false},
            {text: "5", correct: false},
        ]
    },

    {
        question: "Which of the following is not a keyword in Python language?",
        answers: [
            {text: "val", correct: true},
            {text: "raise", correct: false},
            {text: "try", correct: false},
            {text: "with", correct: false},
        ]
    },

    {
        question: "Who developed the Python language?",
        answers: [
            {text: "Zim Den", correct: false},
            {text: "Guido van Rossum", correct: true},
            {text: "Niene Stom", correct: false},
            {text: "Wick van ", correct: false},
        ]
    },

    {
        question:  "What is the maximum possible length of an identifier?",
        answers: [
            {text: "16", correct: false},
            {text: "32", correct: false},
            {text: "64", correct: false},
            {text: "None of the above", correct: true},
        ]
    },

    {
        question: "The 'function' and 'var' are known as:",
        answers: [
            {text: "Keywords", correct: false},
            {text: "Data types", correct: false},
            {text: "Prototypes", correct: false},
            {text: "Declaration statements", correct: true}
        ]
    },

    {
        question: "HTML stands for ?",
        answers: [
            {text: "HyperText Markup Language", correct: true},
            {text: "HighText Machine Language", correct: false},
            {text: "HyperText and links Markup Language", correct: false},
            {text: "None of these", correct: false},
        ]
    },

    {
        question: "The CSS property used to control the element's font-size is?",
        answers: [
            {text: "text-style", correct: false},
            {text: "font-size", correct: true},
            {text: "text-size", correct: false},
            {text: "None of the above", correct: false},
        ]
    },

    {
        question: "The property in CSS used to change the background color of an element is?",
        answers: [
            {text: "background-color", correct: true},
            {text: "bg-color", correct: false},
            {text: "color", correct: false},
            {text: "None of the above", correct: false},
        ]
    }

    
]


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}




// this function is used to check the selected answer is correct or not

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")      
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });  
    nextButton.style.display = "block";
}


// used to display the score

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}



// next button functionality

function handleNextButton(){
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz() 