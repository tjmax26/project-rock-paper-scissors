let humanScore = 0;
let computerScore = 0;

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

console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Pass in your choice").toLowerCase()

    if (choice == "rock") {
        return "Rock"
    }
    if (choice == "paper") {
        return "Paper"
    }
    if (choice =="scissors" ) {
        return "Scissors"
    }
}

console.log(getHumanChoice());

