// 읽기 연습 기능
function startReadingPractice() {
    alert('읽기 연습을 시작합니다!');
}

// 쓰기 연습 기능
function checkWriting() {
    const answer = document.getElementById('write-area').value;
    const feedback = document.getElementById('write-feedback');

    if (answer === 'こんにちは') {
        feedback.innerText = '정답입니다!';
        feedback.style.color = 'green';
    } else {
        feedback.innerText = '오답입니다. 다시 시도해보세요.';
        feedback.style.color = 'red';
    }
}

// 음성 인식 기능
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'ja-JP';

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('spoken-text').innerText = `인식된 단어: ${transcript}`;
};

function startSpeechRecognition() {
    recognition.start();
}

const quizQuestions = [
    { question: "こんにちは의 의미는?", answer: "안녕하세요" },
    { question: "ありがとう의 의미는?", answer: "감사합니다" }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
}

function checkQuizAnswer() {
    const userAnswer = document.getElementById('quiz-answer').value;
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        document.getElementById('quiz-feedback').innerText = '정답입니다!';
    } else {
        document.getElementById('quiz-feedback').innerText = '오답입니다. 다시 시도해보세요!';
    }
}
