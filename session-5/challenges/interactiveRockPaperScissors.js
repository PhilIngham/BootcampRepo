const inputFromUser = document.getElementById("input");
const confirmBtn = document.querySelector(".confirmBtn");
const selection = inputFromUser.innerHTML;
const userSelection = document.getElementById("userSelection");
const compSelection = document.getElementById("compSelection");
const result = document.getElementById("result");
let userCounter = 0;
let compCounter = 0;
let drawCounter = 0;
const userWins = document.getElementById("userWins");
const compWins = document.getElementById("compWins");
const draws = document.getElementById("draws");

const playGame = (userInput) => {
  const choices = ["rock", "paper", "scissor"];

  let userChoice = userInput.toLowerCase(); // user input from website
  let checker = 0;
  for (let i = 0; i < 3; i++) {
    if (userChoice !== choices[i]) {
      checker++;
    }
  }
  if (checker !== 2) {
    throw new Error("Input must be rock, paper or scissor");
  }
  let compNum = Math.floor(Math.random() * 3); // makes 0, 1, 2
  let compChoice = choices[compNum];
  console.log("User choice: ", userChoice);
  userSelection.innerHTML = `User Choice: ${userChoice}`;
  console.log("Computer choice: ", compChoice);
  compSelection.innerHTML = `Comp Choice: ${compChoice}`;

  if (userChoice === "rock") {
    switch (compChoice) {
      case "rock":
        result.innerHTML = "Draw!";
        drawCounter++;
        break;
      case "paper":
        result.innerHTML = "Computer has won!";
        compCounter++;
        break;
      case "scissor":
        result.innerHTML = "User has won!";
        userCounter++;
        break;
    }
  } else if (userChoice === "paper") {
    switch (compChoice) {
      case "rock":
        result.innerHTML = "User has won!";
        userCounter++;
        break;
      case "paper":
        result.innerHTML = "Draw!";
        drawCounter++;
        break;
      case "scissor":
        result.innerHTML = "Computer has won!";
        compCounter++;
        break;
    }
  } else if (userChoice === "scissor") {
    switch (compChoice) {
      case "rock":
        result.innerHTML = "Computer has won!";
        compCounter++;
        break;
      case "paper":
        result.innerHTML = "User has won!";
        userCounter++;
        break;
      case "scissor":
        result.innerHTML = "Draw!";
        drawCounter++;
        break;
    }
  }
  userWins.innerHTML = `User wins: ${userCounter}`;
  compWins.innerHTML = `Comp wins: ${compCounter}`;
  draws.innerHTML = `Draws: ${drawCounter}`;
};

confirmBtn.addEventListener("click", function () {
  const userInput = inputFromUser.value;
  try {
    playGame(userInput);
  } catch (err) {
    console.error(err);
  }
});
