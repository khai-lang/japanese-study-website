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


function updateWordList() {
    const wordListElement = document.getElementById('word-list');
    wordListElement.innerHTML = '';
    wordList.forEach((word, index) => {
        wordListElement.innerHTML += `<li>${word} <button onclick="removeWord(${index})">삭제</button></li>`;
    });
}

function removeWord(index) {
    wordList.splice(index, 1);
    updateWordList();
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

음성인식기능추가
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'ja-JP';

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('spoken-text').innerText = `인식된 단어: ${transcript}`;

    if (transcript === "こんにちは") {
        alert('정확한 발음입니다!');
    } else {
        alert('발음을 다시 시도해보세요.');
    }
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


단어장기능추가
const wordList = [];

function addWord() {
    const word = document.getElementById('new-word').value;
    if (word) {
        wordList.push(word);
        updateWordList();
    }
}
