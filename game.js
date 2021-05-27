"use strict";

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

let computerChoice = computerPlay();

function playerSelection() {
  let playerInput = prompt(
    "Choose rock, paper or scissors and type it in the field below",
    ""
  );
  return playerInput.toLowerCase();
}

let playerChoice = playerSelection();

function round(player, computer) {
  switch (true) {
    case computer == player:
      console.log("It's a tie!");
      break;
    case computer == "rock" && playerSelection == "paper":
      console.log("Player wins!");
      break;
    case computer == "rock" && player == "scissors":
      console.log("Computer wins!");
      break;
    case computer == "scissors" && player == "rock":
      console.log("Player wins!");
      break;
    case computer == "scissors" && player == "paper":
      console.log("Computer wins!");
      break;
    case computer == "paper" && player == "scissors":
      console.log("Player wins!");
      break;
    case computer == "paper" && player == "rock":
      console.log("Computer wins!");
      break;
  }
}
round(playerChoice, computerChoice);
