//
//
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "rock") {
    return "Rock";
  } else if (letter === "paper") {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "computer".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(
    user
  )} ${smallUserWord} beats ${convertToWord(
    computer
  )} ${smallCompWord} <br> YOU WIN!`;
  // document.getElementById(user).classList.add("green-glow");
}

function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "computer".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(
    user
  )} ${smallUserWord} loses to ${convertToWord(
    computer
  )} ${smallCompWord} <br> YOU LOST BOZO!`;
}

function draw(user, computer) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "computer".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(
    user
  )} ${smallUserWord} equals ${convertToWord(
    computer
  )} ${smallCompWord} <br> IT's a DRAW!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperppaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("rock");
  });

  paper_div.addEventListener("click", function() {
    game("paper");
  });

  scissors_div.addEventListener("click", function() {
    game("scissors");
  });
}

main();
