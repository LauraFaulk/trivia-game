// 1. Your data (The Array of Objects)
const myQuestions = [
    {
        question: "Which Git command sends local changes to GitHub?",
        answers: ["git pull", "git dispatch", "git push"],
        correct: 2
    },
    {
        question: "What year was JavaScript created?",
        answers: ["1995", "2005", "1985"],
        correct: 0
    },
    {       question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "Hot Mail", "Home Tool Markup"],
        correct: 0
    },
    {
        question: "Which language is used for styling?",
        answers: ["Python", "CSS", "Java"],
        correct: 1
    }
];

// 2. Logic to display the first question
const questionEl = document.getElementById('question');
const answerBox = document.getElementById('answer-buttons');

function loadQuestion(index) {
    const q = myQuestions[index];
    questionEl.innerText = q.question;
    
    // Create a button for each answer
    q.answers.forEach((text, i) => {
        const btn = document.createElement('button');
        btn.innerText = text;
        btn.onclick = () => {
            if(i === q.correct) alert("Correct!");
            else alert("Wrong!");
        };
        answerBox.appendChild(btn);
    });
}

loadQuestion(0); // Start with the first question

