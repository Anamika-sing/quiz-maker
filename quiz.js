const quizId = localStorage.getItem("currentQuizId");
const quiz = quizId ? getQuizById(quizId) : null;

function showNoQuiz() {
  document.querySelector(".quiz-container").innerHTML = `
    <h2>No quiz found</h2>
    <p style="margin:15px 0 25px;">Create a quiz first, then come back to attempt it.</p>
    <a href="create_quiz.html"><button>Create Quiz</button></a>
  `;
}

function startQuiz() {
  const total = quiz.questions.length;

  let currentQuestion = 0;
  const answers = [];

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const numberEl = document.getElementById("questionNumber");
  const progressEl = document.getElementById("progressBar");
  const timeEl = document.getElementById("time");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  document.getElementById("quizTitle").textContent = quiz.title;

  /* ---------- Timer ---------- */

  let timeLeft = Math.max(1, Number(quiz.timer) || 1) * 60;

  function showTime() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    timeEl.textContent = `${minutes}:${seconds}`;
  }

  showTime();

  const timerId = setInterval(() => {
    timeLeft--;
    showTime();

    if (timeLeft <= 0) {
      clearInterval(timerId);
      alert("Time is up! Your quiz is being submitted.");
      saveAnswer();
      finishQuiz();
    }
  }, 1000);

  /* ---------- Questions ---------- */

  function saveAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');

    if (selected) {
      answers[currentQuestion] = selected.value;
    }
  }

  function loadQuestion() {
    const q = quiz.questions[currentQuestion];

    numberEl.textContent = `Question ${currentQuestion + 1} / ${total}`;
    questionEl.textContent = q.question;

    optionsEl.innerHTML = "";

    q.options.forEach((opt, index) => {
      const label = document.createElement("label");
      label.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = index;

      if (answers[currentQuestion] == index) {
        input.checked = true;
      }

      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      optionsEl.appendChild(label);
    });

    progressEl.style.width = ((currentQuestion + 1) / total) * 100 + "%";

    prevBtn.style.visibility = currentQuestion === 0 ? "hidden" : "visible";
    nextBtn.textContent = currentQuestion === total - 1 ? "Submit" : "Next";
  }

  function finishQuiz() {
    clearInterval(timerId);

    let score = 0;

    quiz.questions.forEach((q, index) => {
      if (answers[index] !== undefined && answers[index] == q.correct) {
        score++;
      }
    });

    localStorage.setItem("score", score);
    localStorage.setItem(
  "quizResult",
  JSON.stringify({ title: quiz.title, score: score, total: total })
);

    window.location.href = "result.html";
  }

  nextBtn.onclick = () => {
    saveAnswer();

    if (currentQuestion < total - 1) {
      currentQuestion++;
      loadQuestion();
      return;
    }

    let unanswered = 0;

    for (let i = 0; i < total; i++) {
      if (answers[i] === undefined) {
        unanswered++;
      }
    }

    if (unanswered > 0) {
      const sure = confirm(
        `You have ${unanswered} unanswered question(s). Submit anyway?`
      );

      if (!sure) {
        return;
      }
    }

    finishQuiz();
  };

  prevBtn.onclick = () => {
    saveAnswer();

    if (currentQuestion > 0) {
      currentQuestion--;
      loadQuestion();
    }
  };

  loadQuestion();
}

if (!quiz || !Array.isArray(quiz.questions) || quiz.questions.length === 0) {
  showNoQuiz();
} else {
  startQuiz();
}