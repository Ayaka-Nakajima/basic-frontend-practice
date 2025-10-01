let quizEl = document.getElementById("quiz");
let messageEl = document.getElementById("message");
let redEl = document.getElementById("red");
let greenEl = document.getElementById("green");
let blueEl = document.getElementById("blue");
let yellowEl = document.getElementById("yellow");
let scoreEl = document.getElementById("score");
let starGameEl = document.getElementById("start-btn");
let highScore = 0;
function startGame() {
  renderGame();
  starGameEl.style.display = "none";
}

function renderGame() {
  let colors = ["red", "green", "blue", "yellow"];
  let randomTextColor = colors[Math.floor(Math.random() * colors.length)];
  quizEl.innerText = randomTextColor;
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  quizEl.style.color = randomColor;
  messageEl.innerText = "Click the color that matches the text!";
}

function selectColor(color) {
  if (color == quizEl.innerText) {
    scoreEl.innerText = parseInt(scoreEl.innerText) + 1;
  } else {
    if (parseInt(scoreEl.innerText) > highScore) {
      highScore = parseInt(scoreEl.innerText);
    }
    alert(
      "Game is over!" +
        " Your score: " +
        scoreEl.innerText +
        " High score: " +
        highScore
    );
    resetGame();
  }
  renderGame();
}

function resetGame() {
  scoreEl.innerText = 0;
  startGame();
}
