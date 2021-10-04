const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resultDiv = document.getElementById("results");
let userWins = 0;
let compWins = 0;
let draws = 0;

function playGame(selection) {
  const choices = ["Rock", "Paper", "Scissor"];

  let userChoice = selection; // change number for user input

  let compNum = Math.floor(Math.random() * 3); // makes 0, 1, 2
  let compChoice = choices[compNum];

  let result = `User choice: ${userChoice} <br>
  Computer choice: ${compChoice} <br>`;

  if (userChoice === "Rock") {
    switch (compChoice) {
      case "Rock":
        result += "Draw!";
        break;
      case "Paper":
        result += "Computer has won!";
        compWins++;
        break;
      case "Scissor":
        result += "User has won!";
        userWins++;
    }
  } else if (userChoice === "Paper") {
    switch (compChoice) {
      case "Rock":
        result += "User has won!";
        userWins++;
        break;
      case "Paper":
        result += "Draw!";
        break;
      case "Scissor":
        result += "Computer has won!";
        compWins++;
        break;
    }
  } else if (userChoice === "Scissor") {
    switch (compChoice) {
      case "Rock":
        result += "Computer has won!";
        compWins++;
        break;
      case "Paper":
        result += "User has won!";
        userWins++;
        break;
      case "Scissor":
        result += "Draw!";
    }
  }

  result += `<br> Play Again! <br> User wins: ${userWins} <br> Comp wins: ${compWins}`;

  resultDiv.innerHTML = result;
}

// function main() {
//   rock.addEventListener("click", playGame("Rock"));
//   paper.addEventListener("click", playGame("Paper"));
//   scissors.addEventListener("click", playGame("Scissor"));
// }

// main();

rock.addEventListener("click", function () {
  playGame("Rock");
});
paper.addEventListener("click", function () {
  playGame("Paper");
});
scissors.addEventListener("click", function () {
  playGame("Scissor");
});
