"use strict";
let playerScore = 0;
let computerScore = 0;
let computer = "";
let playerPrompt = () => {
  let player = prompt("What's your name?", "");
  return player.toUpperCase();
};
let playerName = playerPrompt();

const pName = document.querySelector("#pName");
const pN = document.createElement("p");
const pNN = document.createTextNode(`${playerName}:`);
pN.append(pNN);
pName.append(pN);

const pScore = document.querySelector("#pScore");

pScore.textContent = `${playerScore}`;

const cScore = document.querySelector("#cScore");
cScore.textContent = `${computerScore}`;

const text = document.querySelector(".text");
const pT = document.createElement("p");
const ppN = document.createTextNode("Let's Play Rock Paper Scissors!");
pT.append(ppN);
text.append(pT);

const disableBtn = document.querySelectorAll(".nobtn");

disableBtn.forEach((disableBtn) => {
  disableBtn.setAttribute("disabled", "disabled");
});

const buttons = document.querySelectorAll("button");
let final = () => {
  if (playerScore === 5) {
    pT.textContent = `Well done! You defeated the computer. The final score is ${playerScore} : ${computerScore}.`;
  } else if (computerScore === 5) {
    pT.textContent = `What a pity! You lose :( The final score is ${playerScore} : ${computerScore}. Better luck next time!`;
  }
};
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerInput = `${button.id}`;
    playRound(playerInput, computerPlay);
    let roundtxt = roundText(playerInput, computer);
    pT.textContent = `${roundtxt}`;
    if (playerScore === 5 || computerScore === 5) {
      final();
      playerScore = 0;
      computerScore = 0;
    }
    pScore.textContent = `${playerScore}`;
    cScore.textContent = `${computerScore}`;
  });
});

let computerPlay = () => {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "scissors";
  } else if (randomNumber === 2) {
    return "rock";
  } else {
    return "paper";
  }
};

function addsAnimation(computer) {
  if (computer === "rock") {
    disableBtn.item(0).classList.add("cRock");
    setTimeout(function () {
      disableBtn.item(0).classList.remove("cRock");
    }, 1000);
    return;
  }
  if (computer === "paper") {
    disableBtn.item(1).classList.add("cPaper");
    setTimeout(function () {
      disableBtn.item(1).classList.remove("cPaper");
    }, 1000);
    return;
  }
  if (computer === "scissors") {
    disableBtn.item(2).classList.add("cScissors");
    setTimeout(function () {
      disableBtn.item(2).classList.remove("cScissors");
    }, 1000);
    return;
  }
}

let playRound = (player, computerin) => {
  computer = computerin();
  addsAnimation(computer);
  switch (true) {
    case computer == player:
      return playerScore;

    case computer == "rock" && player == "paper":
      ++playerScore;
      return playerScore;

    case computer == "rock" && player == "scissors":
      ++computerScore;
      return computerScore;

    case computer == "scissors" && player == "rock":
      ++playerScore;
      return playerScore;

    case computer == "scissors" && player == "paper":
      ++computerScore;
      return computerScore;

    case computer == "paper" && player == "scissors":
      ++playerScore;
      return playerScore;

    case computer == "paper" && player == "rock":
      ++computerScore;
      return computerScore;
  }
};
let roundText = (player, computer) => {
  switch (true) {
    case computer == player:
      return "It's a tie!";

    case computer == "rock" && player == "paper":
      return "You win! Paper beats rock!";

    case computer == "rock" && player == "scissors":
      return "You lose! Rock beats scissors!";

    case computer == "scissors" && player == "rock":
      return "You win! rock beats scissors!";

    case computer == "scissors" && player == "paper":
      return "You lose! Scissors beat paper!";

    case computer == "paper" && player == "scissors":
      return "You win! Scissors beat paper!";

    case computer == "paper" && player == "rock":
      return "You lose! Paper beats rock!";
  }
};
