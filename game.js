"use strict";
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
  game(playerSelection, computerPlay);

  function game(player, computer) {
    player = player();
    computer = computer();
    let roundScore = playRound(player, computer);
    console.log(roundScore);
    gameScoreFunc(roundScore);
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
  }
}

function playerSelection() {
  let playerInputCaseSensitive = prompt(
    "Choose rock, paper or scissors and type it in the field below",
    ""
  );
  let playerInput = playerInputCaseSensitive.toLowerCase();
  if (
    playerInput !== "scissors" &&
    playerInput !== "paper" &&
    playerInput !== "rock"
  ) {
    alert(
      "Don't you know the rules? Just 'rock', 'paper' or 'scissors' is allowed!"
    );
  } else {
    return playerInput;
  }
}

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "scissors";
  } else if (randomNumber === 2) {
    return "rock";
  } else {
    return "paper";
  }
}

function playRound(player, computer) {
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
}

function gameScoreFunc(roundScore) {
  if (
    roundScore === "You win! Paper beats rock!" ||
    roundScore === "You win! rock beats scissors!" ||
    roundScore === "You win! Scissors beat paper!"
  ) {
    ++playerScore;
    return playerScore;
  } else {
    ++computerScore;
    return computerScore;
  }
}

let gameResult = () => {
  if (playerScore > computerScore) {
    console.log(
      `The final result is Player: ${playerScore} | Computer: ${computerScore}. You win!`
    );
  } else {
    console.log(
      `The final result is Player: ${playerScore} | Computer: ${computerScore}. You lose!`
    );
  }
};
gameResult;
