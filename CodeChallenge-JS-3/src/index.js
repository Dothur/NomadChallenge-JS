const geneForm = document.getElementById("gene-form");
const geneInput = document.querySelector("#gene-form input");

const guessForm = document.getElementById("guess-form");
const guessInput = document.querySelector("#guess-form input");

const playBtn = document.querySelector("#play-Btn");
const mainSpan = document.querySelector("#mainSpan");
const gameResult = document.querySelector("#gameResult");

function warnNegativeNum(inputValue, num) {
  if (num < 0) {
    inputValue.value = "";
    alert("입력이 올바르지 않습니다.");
  }
}
function setGuessNumber(event) {
  event.preventDefault();
  const guessNumber = guessInput.value;
  warnNegativeNum(guessInput, guessNumber);
}

function setMaxNumber(event) {
  event.preventDefault();
  const maxNumber = geneInput.value;
  warnNegativeNum(geneInput, maxNumber);
}

function gameStart(event) {
  const randomNum = Math.round(Math.random() * geneInput.value);
  mainSpan.innerText = `You chose: ${guessInput.value}, the machine chose: ${randomNum}`;
  if (
    geneInput.value === "" ||
    guessInput.value === "" ||
    geneInput.value < 0 ||
    guessInput.value < -1 ||
    parseInt(geneInput.value, 10) < parseInt(guessInput.value, 10)
  ) {
    alert("입력이 올바르지 않습니다.");
    geneInput.value = "";
    guessInput.value = "";
    mainSpan.classList.add("hidden");
    gameResult.classList.add("hidden");
    return;
  } else if (parseInt(guessInput.value, 10) === randomNum) {
    gameResult.innerText = "You won!";
    mainSpan.classList.remove("hidden");
    gameResult.classList.remove("hidden");
  } else {
    gameResult.innerText = "You lose!";
    mainSpan.classList.remove("hidden");
    gameResult.classList.remove("hidden");
  }
}
geneForm.addEventListener("submit", setMaxNumber);
guessForm.addEventListener("submit", setGuessNumber);
playBtn.addEventListener("click", gameStart);
