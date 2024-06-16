const again = document.querySelector(".again");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const satauri = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const body = document.querySelector("body");

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

let theScore = 20;
let theHighScore = 0;

check.addEventListener("click", function () {
  if (guess.value > secretNumber) {
    satauri.textContent = "Too high👆";
    theScore--;
    score.innerHTML = theScore;
  } else if (guess.value < secretNumber) {
    satauri.textContent = "Too low 👇";
    theScore--;
    score.innerHTML = theScore;
  } else if (guess.value == secretNumber) {
    satauri.textContent = "Correct Answer😉";
    body.style.backgroundColor = "chartreuse";
    number.innerHTML = secretNumber;

    if (theScore > theHighScore) {
      theHighScore = theScore;
      highscore.textContent = theHighScore;
    }
  }
});

again.addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  number.textContent = "?";
  guess.value = " ";
  body.style.backgroundColor = "#222";
  satauri.textContent = "Start guessing...";
  theScore = 20;
  score.textContent = 20;
});
