const questionEl = document.getElementById('question');
const answerBox = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;

const myQuestions = [
    {
        question: "What was Elvis Presley's first #1 hit in the U.S.?",
        answers: ["Hound Dog", "Heartbreak Hotel", "Jailhouse Rock"],
        correct: 1
    },
    {
        question: "Which band released Smells Like Teen Spirit?",
        answers: ["Nirvana", "Green Day", "Pearl Jam"],
        correct: 0
    },
    {
	question: "Which band's lead singers have included David Lee Roth & Sammy Hagar?",
	answers: ["Metallica", "The Eagles", "Van Halen"],
	correct: 2
    },
    {
	question: "Which band released the song, Hotel California?",
	answers: ["Nirvana", "The Eagles", "Styx"],
	correct: 1
    },
    {
	question: "Which song was NOT released by the supergroup made up of Tommy Shaw, Jack Blades, Ted Nugent, and Michael Cartellone?",
	answers: ["High Enough", "Come Again", "Renegade"],
	correct: 2
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
        alert("Correct! ✨");
    } else {
        alert("Oops! Try again. 💡");
    }
    nextBtn.classList.remove('hide');
}

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < myQuestions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "Game Over! You're a pro! 🎉";
        answerBox.innerHTML = '';
        nextBtn.classList.add('hide');
    }
};

// Initial start
loadQuestion();
