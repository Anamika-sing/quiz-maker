const container = document.getElementById("quizContainer");
const search = document.getElementById("search");

const allQuizzes = getAllQuizzes();

function addLine(parent, label, value) {
  const p = document.createElement("p");
  const b = document.createElement("b");

  b.textContent = label + " : ";
  p.appendChild(b);
  p.appendChild(document.createTextNode(value));

  parent.appendChild(p);
}

function showMessage(title, text) {
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "quiz-card";

  const h2 = document.createElement("h2");
  h2.textContent = title;
  card.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = text;
  card.appendChild(p);

  container.appendChild(card);
}

function createCard(data) {
  const card = document.createElement("div");
  card.className = "quiz-card";

  const title = document.createElement("h2");
  title.textContent = data.title;
  card.appendChild(title);

  addLine(card, "Category", data.category);
  addLine(card, "Total Questions", data.questions.length);
  addLine(card, "Timer", data.timer + " Minutes");

  const button = document.createElement("button");
  button.textContent = "Start Quiz";
  button.addEventListener("click", () => startQuiz(data.id));
  card.appendChild(button);

  return card;
}

function showQuizzes(list) {
  container.innerHTML = "";

  if (list.length === 0) {
    showMessage("No Result Found", "Try a different search word.");
    return;
  }

  list.forEach((quiz) => {
    container.appendChild(createCard(quiz));
  });
}

showQuizzes(allQuizzes);

search.addEventListener("input", () => {
  const value = search.value.trim().toLowerCase();

  const filtered = allQuizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(value) ||
    quiz.category.toLowerCase().includes(value)
  );

  showQuizzes(filtered);
});

function startQuiz(id) {
  localStorage.setItem("currentQuizId", id);
  window.location.href = "quiz.html";
}