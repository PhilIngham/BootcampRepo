const words = [
  "heavenly",
  "discover",
  "increase",
  "scientific",
  "mint",
  "flippant",
];

let time = 5; // time left to play
let score = 0;
let isPlayingGame; // determines if the user is playing the game

// Selectors

const wordInput = document.getElementById("word-input");
const currentWord = document.getElementById("current-word");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const message = document.getElementById("message");
const seconds = document.getElementById("seconds");

// Initialises the game:
const initialise = () => {
  console.log("Initialised game!");

  // Fetch new random word and display it
  showWord();

  // Fetch the user's input
  wordInput.addEventListener("input", checkInput);

  // Do countdown by 1s
  setInterval(countDownTimer, 1000);

  // Check status of game being played
  setInterval(checkGameStatus, 500);
};

const checkGameStatus = () => {
  if (!isPlayingGame && time === 0) {
    message.innerHTML = "Game over!";
    score = -1;
  }
};

const countDownTimer = () => {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlayingGame = false;
  }

  timeDisplay.innerHTML = time;
};

const checkWordsMatch = () => {
  let matched = false;
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!";
    matched = true;
  } else {
    message.innerHTML = "";
  }
  return matched;
};

const checkInput = () => {
  if (checkWordsMatch()) {
    // There was a match
    isPlayingGame = true;
    time = 6;

    // Show new word for game to start
    showWord();

    // Reset the input
    wordInput.value = "";

    score++;
  }

  if (scoreDisplay === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
};

const showWord = () => {
  const randIdx = Math.floor(Math.random() * words.length);
  const wordSelected = words[randIdx];
  currentWord.innerHTML = wordSelected;
};

window.addEventListener("load", initialise);
