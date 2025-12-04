// 1. Questions Array
let questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "High Tech Modern Language"],
        answer: 0
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Python", "C++", "JavaScript"],
        answer: 2
    },
    {
        question: "What does CSS control?",
        options: ["Structure", "Styling", "Database"],
        answer: 1
    }
];

let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

// 2. Shuffle Questions
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

// 3. Display Question
function displayQuestion() {
    const q = questions[currentIndex];
    document.getElementById("question-text").textContent = q.question;

    const optionBox = document.getElementById("options");
    optionBox.innerHTML = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(index);
        optionBox.appendChild(btn);
    });

    document.getElementById("feedback").textContent = "";
}

// 4. Check Answer
function checkAnswer(selected) {
    const correct = questions[currentIndex].answer;
    const optionButtons = document.querySelectorAll(".option-btn");

    if (selected === correct) {
        optionButtons[selected].classList.add("correct");
        document.getElementById("feedback").textContent = "Correct!";
        score++;
    } else {
        optionButtons[selected].classList.add("incorrect");
        optionButtons[correct].classList.add("correct");
        document.getElementById("feedback").textContent = "Incorrect!";
    }

    clearInterval(timer);
}

// 5. Move to Next Question
function nextQuestion() {
    currentIndex++;

    if (currentIndex >= questions.length) {
        showScore();
    } else {
        startTimer();
        displayQuestion();
    }
}

// 6. Timer
function startTimer() {
    timeLeft = 10;
    document.getElementById("time").textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

// 7. Start Quiz
function startQuiz() {
    shuffleQuestions();
    currentIndex = 0;
    score = 0;

    document.getElementById("quiz-box").classList.remove("hidden");
    document.getElementById("result-box").classList.add("hidden");

    startTimer();
    displayQuestion();
}

function showScore() {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");

    document.getElementById("score").textContent =
        `You scored ${score} out of ${questions.length}!`;
}

// Start automatically
startQuiz();

document.getElementById("next-btn").onclick = nextQuestion;
