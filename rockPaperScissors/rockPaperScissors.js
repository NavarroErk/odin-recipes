let playerScore = 0;
let computerScore = 0;
let firstTo5 = document.getElementById("firstTo5");
let directionPara = document.getElementById("direction");
let btnSelection = document.getElementsByClassName("btnSelection");
let rock = document.getElementById("rockSelection");
rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice);
});
let paper = document.getElementById("paperSelection");
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice);
});
let scissors = document.querySelector("#scissorsSelection");
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice);
});
let result;
let paraOutput = document.getElementById("output");
let playerScorePara = document.getElementById("playerScorePara");
let computerScorePara = document.getElementById("computerScorePara");
let playAgainBtn = document.getElementById("playAgainBtn");
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}
getComputerChoice();

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  if (playerSelection == computerSelection) {
    result = `It's a tie. You both selected ${playerSelection}`;
    paraOutput.textContent = result;
    verifyScore(playerScore, computerScore);
    return result;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    result = `You lose. ${computerSelection} beats ${playerSelection}`;
    paraOutput.textContent = result;
    computerScore++;
    computerScorePara.textContent = `Computer Score: ${computerScore}`;
    verifyScore(playerScore, computerScore);
    return result;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    result = `You win. ${playerSelection} beats ${computerSelection}`;
    paraOutput.textContent = result;
    playerScore++;
    playerScorePara.textContent = `Player Score: ${playerScore}`;
    verifyScore(playerScore, computerScore);
    return result;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    result = `You lose. ${computerSelection} beats ${playerSelection}`;
    paraOutput.textContent = result;
    computerScore++;
    computerScorePara.textContent = `Computer Score: ${computerScore}`;
    verifyScore(playerScore, computerScore);
    return result;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result = `You win. ${playerSelection} beats ${computerSelection}`;
    paraOutput.textContent = result;
    playerScore++;
    playerScorePara.textContent = `Player Score: ${playerScore}`;
    verifyScore(playerScore, computerScore);
    return result;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    result = `You win. ${playerSelection} beats ${computerSelection}`;
    paraOutput.textContent = result;
    playerScore++;
    playerScorePara.textContent = `Player Score: ${playerScore}`;
    verifyScore(playerScore, computerScore);
    return result;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    result = `You lose. ${computerSelection} beats ${playerSelection}`;
    paraOutput.textContent = result;
    computerScore++;
    computerScorePara.textContent = `Computer Score: ${computerScore}`;
    verifyScore(playerScore, computerScore);
    return result;
  }
}

// console.log(playRound(playerSelection, getComputerChoice()))

function endScreen() {
  directionPara.style.display = "none";
  firstTo5.style.display = "none";
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
  paraOutput.style.fontSize = "40pt";
  playAgainBtn.style.display = "";
}

function verifyScore(playerScore, computerScore) {
  if (playerScore == 5) {
    endScreen();
    paraOutput.textContent = "Congratulations, you win!";
    paraOutput.style.color = "green";
  } else if (computerScore == 5) {
    endScreen();
    paraOutput.textContent = "You lose. Better luck next time!";
    paraOutput.style.color = "red";
  }
}

playAgainBtn.addEventListener("click", () => location.reload());
