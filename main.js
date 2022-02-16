
function computerPlay() {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

function playerPlay() {
  let choice = prompt("What's your pick?").toLowerCase();

  while(true) {
    if (choice == "rock"|| choice == "paper" || choice == "scissors") {
      return choice;
    } else {
      choice = prompt("Please enter valid input only.").toLowerCase();
    }
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win~ rock beats scissors!"
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose~ paper beats rock!"
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win~ scissors beats paper!"
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose~ rock beats scissors!"
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win~ paper beats rock!"
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose~ scissors beats paper!"
  } else {
    return "Tie!"
  }
}

// create a function called playRound(playerSelection, computerSelection)
  // if ... else statements
    // plus, return statements || 'you lose' or 'you win'
    // else, tie

// initialize two score variables, which will keep track of the scores
  // playerScore & computerScore

// have a loop that will iterate the playRound function 5x, called game()
  // run playerPlay function, then assign its value to a variable
  // same goes with computerPlay
  // run playRound, passing these arguments as parameters to the function
    // increment score of the winning side
    // if returned string contains 'win', increment playerScore

// print winner, depending on the two score variables

// game()