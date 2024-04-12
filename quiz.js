const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');

// Define quiz questions and answers
const questions = [
    {
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Madrid'],
        answer: 'Paris'
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4'
    },
    // Add more questions here...
];

function generateQuiz() {
    const output = [];

    questions.forEach((question, index) => {
        const options = [];
        question.options.forEach((option, i) => {
            options.push(
                `<label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>`
            );
        });

        output.push(
            `<div class="question">
                <h4>${question.question}</h4>
                ${options.join('')}
            </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function submitQuiz() {
    let score = 0;

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === question.answer) {
            score++;
        }
    });

    alert(`Your score: ${score}/${questions.length}`);
}

generateQuiz();

submitButton.addEventListener('click', submitQuiz);
