

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


let humanScore = 0;
let computerScore = 0;


const resultDiv = document.querySelector("#result")
const finalResult = document.querySelector("#finalResult")
const winnerDiv = document.querySelector("#winner")


   
    
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")

function disableButtons(){
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
}



function playGame() {

    
function checkWinner(){
    if(humanScore===5){
        winnerDiv.textContent = "💐 You win the game!"
        disableButtons()
    }
    else if (computerScore=== 5){
        winnerDiv.textContent = "💻 Computer wins the game!"
        disableButtons()
    }
}


function playRound (humanChoice,computerChoice) {
 if(humanChoice === "rock" && computerChoice ==="scissors"){
    resultDiv.textContent = ("You win rock beat scissors");
    humanScore++
 }
 else if (humanChoice === "scissors" && computerChoice === "paper") {
    resultDiv.textContent = ("You win scissors beat paper");
    humanScore++
 }
 else if (humanChoice === "paper" && computerChoice === "rock"){
    resultDiv.textContent = ("You win paper beats rock");
    humanScore++
 }
 else if(computerChoice === "rock" && humanChoice === "scissors") {
    resultDiv.textContent = ("You lose! Rock beats Scissors");
    computerScore++
 }
else if(computerChoice === "scissors" && humanChoice === "paper") {
    resultDiv.textContent =("You lose! Scissors beats Paper");
    computerScore++
}
else if (computerChoice === "paper" && humanChoice === "rock"){
    resultDiv.textContent = ("You lose! Paper beats Rock");
    computerScore++
}
else{
    resultDiv.textContent =("its a tie");
}
 finalResult.textContent = (`Score - You: ${humanScore} | Computer: ${computerScore}`);
 checkWinner()
}


    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice ();

    // playRound(getHumanChoice(),getComputerChoice())// removing the logic that plays five rounds
    // playRound(getHumanChoice(),getComputerChoice())
    // playRound(getHumanChoice(),getComputerChoice())
    // playRound(getHumanChoice(),getComputerChoice())
    // playRound(getHumanChoice(),getComputerChoice())
 

btn1.addEventListener("click",()=>{
 playRound("rock",getComputerChoice());
});

btn2.addEventListener("click",()=>{
    playRound("paper",getComputerChoice())
});

btn3.addEventListener("click",()=>{
    playRound("scissors",getComputerChoice())
});


    

// if (humanScore > computerScore) {
//     console.log(`You win the game! ${humanScore} - ${computerScore}`);
// }
// else if (computerScore > humanScore) {
//     console.log(`Computer wins the game! ${computerScore} - ${humanScore}`);
// }
// else {
//     console.log(`It's a draw ${humanScore} - ${computerScore}`);
// }
}

playGame()

const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

const buttonsDiv = document.querySelector("#buttons")
buttonsDiv.style.display = "flex";
buttonsDiv.style.flexDirection = "row";
buttonsDiv.style.gap = "10px";

const button = document.querySelectorAll("button")
button.forEach(button =>{
    button.style.marginTop = "30px"
    button.style.marginBottom = "20px"
    button.style.width = "150px"
})