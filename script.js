const questionEl = document.getElementById('question');
const answerBox = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;

const myQuestions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "Hot Mail", "Home Tool Markup"],
        correct: 0
    },
    {
        question: "Which language is used for styling?",
        answers: ["Python", "CSS", "Java"],
        correct: 1
    }
];

function loadQuestion() {
    // Clear previous buttons
    answerBox.innerHTML = '';
    nextBtn.classList.add('hide');

    const q = myQuestions[currentQuestionIndex];
    questionEl.innerText = q.question;
    
    q.answers.forEach((text, i) => {
        const btn = document.createElement('button');
        btn.innerText = text;
        btn.onclick = () => selectAnswer(i, q.correct);
        answerBox.appendChild(btn);
    });
}

function selectAnswer(selectedIndex, correctIndex) {
    if(selectedIndex === correctIndex) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
    // Show the next button after an answer is picked
    nextBtn.classList.remove('hide');
}

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < myQuestions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "Quiz Finished!";
        answerBox.innerHTML = '';
        nextBtn.classList.add('hide');
    }
};

loadQuestion();
