

function getComputerChoice() {
 let random =  Math.floor(Math.random ()*3) + 1
  if (random == 1) {
    return "rock";
  }
 if (random == 2) {
    return "paper";
 }
 if (random ==3) {
    return "scissors";
 }
}

// console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt('Pass in your choice! "rock", "paper" or "scissors').toLowerCase()

    if (choice == "rock") {
        return "rock"
    }
    if (choice == "paper") {
        return "paper"
    }
    if (choice =="scissors" ) {
        return "scissors"
    }
}

// console.log(getHumanChoice());



function playGame() {
    let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice,computerChoice) {
 if(humanChoice === "rock" && computerChoice ==="scissors"){
    console.log("You win rock beat scissors");
    humanScore++
 }
 else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win scissors beat paper");
    humanScore++
 }
 else if (humanChoice === "paper" && computerChoice === "rock"){
    console.log("You win paper beats rock");
    humanScore++
 }
 else if(computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You lose! Rock beats Scissors");
    computerScore++
 }
else if(computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose! Scissors beats Paper");
    computerScore++
}
else if (computerChoice === "paper" && humanChoice === "rock"){
    console.log("You lose! Paper beats Rock");
    computerScore++
}
else{
    console.log("its a tie");
}
}


    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice ();

    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    
    
   


if (humanScore > computerScore) {
    console.log(`You win the game! ${humanScore} - ${computerScore}`);
}
else if (computerScore > humanScore) {
    console.log(`Computer wins the game! ${computerScore} - ${humanScore}`);
}
else {
    console.log(`It's a draw ${humanScore} - ${computerScore}`);
}
}

playGame()
