const result = document.getElementById("result");
const total_score = {
  PlayerScore: 0,
  ComputerScore: 0
};
const player_score = document.getElementById("player-score");
const hand = document.getElementById("hands");

function getComputerChoice() {
  const comInp = ["Rock", "Paper", "Scissors"];
  const randomno = Math.floor(Math.random() * comInp.length);
  return comInp[randomno];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return 0;
  }
  else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    return 1;
  }
  else if (playerChoice == "Paper" && computerChoice == "Rock") {
    return 1;
  }
  else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    return 1;
  }
  else {
    return -1;
  }
}
function showResult(score, playerChoice, computerChoice) {
  hand.innerText = `👨 ${playerChoice} vs 🤖 ${computerChoice}`;
  if (score == 0) {
    result.innerText = "It's a Draw!!";
  }
  else if (score == -1) {
    result.innerText = "You Lose!";
  }
  else {
    result.innerText = "You Won!";
  }
}
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  total_score["PlayerScore"] += score;
  total_score["ComputerScore"] -= score;
  player_score.innerText = `Player Score: ${total_score["PlayerScore"]} Computer Score: ${total_score["ComputerScore"]}`;
  showResult(score, playerChoice, computerChoice);

}
function playGame() {
  const inputs = document.querySelectorAll(".rpsButton");
  const end = document.getElementById("endGameButton");
  inputs.forEach(input => {
    input.addEventListener('click', function() {
      onClickRPS(input.value);
    })
  })
  end.addEventListener('click', endGame);
}
function endGame() {
  hand.innerText = "";
  player_score.innerText = "";
  result.innerText = "";
  total_score["ComputerScore"] = 0;
  total_score["PlayerScore"] = 0;
}

playGame()
