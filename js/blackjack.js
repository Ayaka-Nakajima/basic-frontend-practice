let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message");
let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");

let cards = [firstCard, secondCard];
let starGameEl = document.getElementById("start-btn");
function startGame() {
  renderGame();
  starGameEl.style.display = "none";
}

function renderGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Congratulations! You've got Blackjack!";
  } else {
    isAlive = false;
    message = "You're out of the game!";
  }
  messageEl.innerText = message;
  cardsEl.innerText = "CARDS: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.innerText = "SUM: " + sum;
}

function drawCard() {
  if (isAlive) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  } else {
    starGameEl.style.display = "inherit";
    starGameEl.style.margin = "10px auto";
    starGameEl.style.textAlign = "center";
  }
}
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 11) {
    // J, Q, K
    randomNumber = 10;
  }
  return randomNumber;
}
