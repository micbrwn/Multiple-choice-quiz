


var quizQuestions = [
    {
        question: "JavaScript code can be written in _____.",
        answers: ['JavaScript file (.js file)', 'HTML document directly', 'JavaScript file and in HTML document directly', 'In style sheets (.css file)'],
        correctAnswer: 'JavaScript file and in HTML document directly'
    },
    {
        question: 'Which symbol is used to seperate JavaScript statements?',
        answers: ['Comma (,)', 'Colon (:)', 'Hyphen (_)', 'Semicolon (;)'],
        correctAnswer: 'Semicolon (;)'
    },
    {
        question: 'Which JavaScript method is used to access an HTML element by id?',
        answers: ['getElementId()', 'getElement(id)', 'getElementById(id)', 'elementById(id)'],
        correctAnswer: 'getElementById(id)'
    },
    {
        question: 'Which property is used to define the HTML content to an HTML element with a specific id?',
        answers: ['innerText', 'innnerContent', 'elementText', 'innerHTML'],
        correctAnswer: 'innerHTML'
    },
    {
        question: "Which JavaScript method is used to write on browser's console?",
        answers: ['console.write()', 'console.output()', 'console.log()', 'console.writeJS()'],
        correctAnswer: 'console.log()'
    },
    {
        question: 'Which JavaScript method is used to write into an alert box?',
        answers: ['window.alertHTML()', 'window.alert()', 'window.alertBox()', 'window.alertContent()'],
        correctAnswer: 'window.alert()'
    },
    {
        question: 'Which JavaScript keyword is used to declare a variable?',
        answers: ['Var', 'var', 'Let', 'All of the above'],
        correctAnswer: 'var'
    },
    {
        question: 'JavaScript arrays are written with _____.',
        answers: ['round brackets ()', 'curly brackets {}', 'double quotes ""', 'square brackets []'],
        correctAnswer: 'square brackets []'
    },
    {
        question: 'JavaScript objects are written with _____.',
        answers: ['round brackets ()', 'curly brackets {}', 'double quotes ""', 'square brackets []'],
        correctAnswer: 'curly brackets {}'
    },
    {
        question: 'Which JavaScript operator is used to determine the type of a variable?',
        answers: ["typeof", 'TypeOf', 'typeOf', 'Typeof'],
        correctAnswer: "typeof"
    }
];

var quizArea = document.getElementById('quiz');
var question = document.getElementById('question');
var choices = document.getElementById('choices');
var startBtn = document.getElementById('start-btn');
var checkResult = document.getElementById('check-answer');
var finalScore = document.getElementById('final-score');
var timer = document.getElementById('timer');
var initials = document.getElementById('initials');
var submitInitials = document.getElementById('submitinitals');
var form = document.getElementById('form');
var localStorageName = "value"
var highscoresEl = document.getElementById('highscores');
var input = document.getElementById('input');
var highscores;
var highscoreHistory = "";
var timeRemaining = 90;
var index = 0;
var correct = 0;


//start quiz, start timer, show first question.

function startQuiz() {
    startBtn.setAttribute('disabled', 'true');
    quizArea.classList.remove("hidden");
    timerStart();
    showQuestions();
}

function timerStart() {

    console.log(timerStart);

    var quizInterval = setInterval(function () {
        timeRemaining--;
        timer.textContent = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(quizInterval);
            if (index < quizQuestions.length - 1) {
                
                quizOver();
            }
        }

    }, 1000);

    showQuestions();
};



function showQuestions() {
    var currentQuestion = quizQuestions[index]
    console.log(currentQuestion);

    question.textContent = currentQuestion.question;
    choices.innerHTML = ""
    currentQuestion.answers.forEach(
        (answer) => {
            // create an element 
            // add answer text to it
            // append it to page
            var item = document.createElement("button")
            item.classList.add('button')
            item.addEventListener("click", function (event) {
                checkAnswer(currentQuestion, event)
            });

            item.textContent = answer;
            choices.appendChild(item);
        }
    )
}

function checkAnswer(question, event) {
    console.log("event.target", event.target)
    // compare answer clicked to correct answer for question

    console.log(question.correctAnswer);
    console.log(event.target.textContent);
    if (question.correctAnswer === event.target.textContent) {
        // if correct, add to score, and move to next question
        checkResult.textContent = 'Correct';
        correct++;
    } else {
        timeRemaining -= 10;
        checkResult.textContent = 'Incorrect';
    }
    // if not correct, deduct time and move to next question

    index++;
    if (index < quizQuestions.length) {
        showQuestions();
    } else {
        quizOver();
    }
}

function setHighScore(event) {
    event.preventDefault();
    console.log(input.value);

    // console.log(highscores);
   
    var highscore = {
        initials: input.value,
        score: correct
    }
    console.log(highscore);

    highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    highscores.push(highscore);
    localStorage.setItem('highscores', JSON.stringify(highscores));

    location.replace('./highscores.html')
    // make a new score object with person initials and score
    // put object into a highscores array
    // put highscores array in localstorage
}

submitInitials.addEventListener('click', setHighScore);

function quizOver() {
    quizArea.style.display = "none";
    // console.log(correct);
    timer.style.display = "none";
  
    document.getElementById("final-score").innerHTML = "Final score:" + correct;
    highscoresEl.style.display = "block";




    // get initials from user input
    // create object to store initials and final score
    // retrieve existing localstorage highscores array  
    // add new object to existing highscore array
    // save highscores array to local storage json stringify
    // redirect to highscore.html using window.location .href = "rel path to html", or .replace("rel path to highscore html") or .assign("rel path to highscore html")
    
    // console.log(finalScore);
    // console.log("") //object from stored initials and final score
}












startBtn.addEventListener("click", startQuiz);



