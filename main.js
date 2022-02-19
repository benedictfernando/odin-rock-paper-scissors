
// return random computer move
function computerPlay() {
  let choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// prompt user for their pick
function playerPlay() {
  let choice = prompt("What's your pick?").toLowerCase();
  while(true) {
    if (choice == "rock"|| choice == "paper" || choice == "scissors")
      return choice;
    else choice = prompt("Please enter valid input only.").toLowerCase();
  }
}

// determine round status for every round
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win~ rock beats scissors!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose~ paper beats rock!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win~ scissors beats paper!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose~ rock beats scissors!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win~ paper beats rock!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose~ scissors beats paper!";
  } else return "Tie!";
}

// execute actual game
function game(n) {
  let playerScore = computerScore = 0;
  let player, computer, result;

  for (let i = 0; i < n; i++)
  {
    // assign variables with its corresponding values
    player = playerPlay(); computer = computerPlay();
    result = playRound(player, computer);

    // increment score of winning side
    if (result.includes('win')) playerScore++;
    else if (result.includes('lose')) computerScore++;

    // log results for each round
    console.log(`${player} vs ${computer} \n ${result}`);
    console.log(`Current score: ${playerScore} vs ${computerScore} \n\n`);
  }

  // print winner
  if (playerScore > computerScore) console.log("Player wins!");
  else if (playerScore < computerScore) console.log("Computer wins!");
  else console.log("Tie!")
}

// start game
// game(5);  // prepare 5 rounds



let picks = document.querySelectorAll("button")
let results = document.getElementById("results");
let playerScore = Number(document.getElementById("playerScore").textContent);
let computerScore = Number(document.getElementById("computerScore").textContent);
let scores = document.getElementById("scores");

picks.forEach(pick => {
  pick.addEventListener('click', (e) => {
    results.textContent = playRound(e.target.id, computerPlay());
    addScore(results.textContent); checkForWinner();
  })
});

function addScore(result) {
  if (result.includes('win')) 
    document.getElementById("playerScore").textContent = ++playerScore;
  else if (result.includes('lose')) 
    document.getElementById("computerScore").textContent = ++computerScore;
}

function checkForWinner() {
  if (playerScore === 5) scores.textContent = "Player wins!";
  else if (computerScore === 5) scores.textContent = "Computer wins!";

  if (playerScore === 5 || computerScore === 5) {
    results.textContent = "Kindly reload this tab to play again.";
    picks.forEach(pick => {
      pick.disabled = true;
    })
  }
}