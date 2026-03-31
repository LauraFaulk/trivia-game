const questionEl = document.getElementById('question');
const answerBox = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score-display');

let currentQuestionIndex = 0;
let score = 0;

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
    },
    {
	question: "Which singer fronted Skid Row during their late-80s rise?",
	answers: ["Joe Elliott", "Sebastian Bach", "Jani Lane"],
	correct: 1
    },
    {
	question: "Which member of Queen wrote Another One Bites the Dust?",
	answers: ["John Deacon", "Freddie Mercury", "Brian May"],
	correct: 0
    },
    {
	question: "Who played the iconic guitar solo on Beat It by Michael Jackson?",
	answers: ["Joe Satriani", "Steve Vai", "Eddie Van Halen"],
	correct: 2
    },
    {
	question: "Which band had a hit with “Turn Up the Radio”?",
	answers: ["Night Ranger", "Autograph", "Y&T"],
	correct: 1
    },
    {
	question: "Which band’s name was inspired by a line from a The Wild One starring Marlon Brando?",
	answers: ["Ratt", "Poison", "Warrant"],
	correct: 0
    },
    {
        question: "Which artist had a hit with No Scrubs?",
        answers: ["Destiny's Child", "En Vogue", "TLC"],
        correct: 2
    },
    {
	question: "Which Salt-N-Pepa track from Very Necessary became  one of their biggest crossover hits?",
	answers: ["Push It", "Shoop", "Whatta Man"],
	correct: 1
    },
    {
	question: "Who produced the hit song “California Love” by Tupac Shakur?",
	answers: ["RZA", "Snoop Dogg", "Dr Dre"],
	correct: 2
    },
    {
	question: "Which band featured Michael McDonald as a key member during its peak?",
	answers: ["Doobie Brothers", "The Eagles", "Foreigner"],
	correct:0
    },
    {
	question: "Which song, made popular by Reba McEntire, was about a young girl preparing to leave home in a red dress and a heart-shaped locket?",
	answers: ["Fancy", "Delta Dawn", "Jolene"],
	correct:0
    }
];

function loadQuestion() {
    console.log("Loading question index:", currentQuestionIndex);
    answerBox.innerHTML = '';
    
    // Ensure the button is hidden when a new question starts
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
    const allButtons = answerBox.querySelectorAll('button');
    allButtons.forEach(button => button.disabled = true);

    // Calculate how much % each question is worth
    const pointsPerQuestion = 100 / myQuestions.length;

    if(selectedIndex === correctIndex) {
        score += pointsPerQuestion;
        // Math.round keeps it from showing messy decimals like 33.33333
        scoreEl.innerText = `Score: ${Math.round(score)}%`;
        alert(`Correct! +${Math.round(pointsPerQuestion)}% ✨`);
    } else {
        alert("Oops! 0% for this one. 💡");
    }
    nextBtn.classList.remove('hide');
}

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < myQuestions.length) {
        loadQuestion();
    } else {
        // Final Results Screen
        questionEl.innerText = `Game Over! Final Grade: ${Math.round(score)}%`;
        answerBox.innerHTML = '<button onclick="location.reload()">Restart Quiz</button>';
        nextBtn.classList.add('hide');
        scoreEl.classList.add('hide');
    }
};

loadQuestion();
