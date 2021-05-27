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

function playerSelection() {
  let playerInput = prompt(
    "Choose rock, paper or scissors and type it in the field below",
    ""
  );
  return playerInput.toLowerCase();
}
round(playerSelection, computerPlay);

/* func bar () {}
   func foo () {}
   func bafo (ba, fo) {
   ba = ba(); //
   fo = fo(); // falls es eine Variable sein soll. Ansonsten reicht auch nur ba(); fo();
   }
*/

function round(player, computer) {
  player = player(); //muss player = player(); sein, da die variable sonst nicht als Parameter anerkannt wird.
  computer = computer();
  switch (true) {
    case computer == player:
      console.log("It's a tie!");
      break;
    case computer == "rock" && player == "paper":
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
