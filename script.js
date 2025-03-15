// OBTAIN computer's choice
function getComputerChoice() {
    const getRandomInt = function(max) {
        return Math.floor(Math.random() * max);
    }

    let value = getRandomInt(3);

    let computerChoice = "null";

    if (value === 0) {
        computerChoice = "rock";
    } else if (value === 1) {
        computerChoice = "paper";
    } else {
        computerChoice =  "scissors";
    }

    return computerChoice;
}

// OBTAIN player's choice
function getHumanChoice() {
    let humanChoice = prompt("What's your move?");
    let humanChoiceLower = humanChoice.toLowerCase();
    return humanChoiceLower;
}

// INITIALIZE scores
let humanScore = 0;
let computerScore = 0;

// INITIALIZE round
function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("Tie!");
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! Paper beats rock.")
        computerScore++;
    }
}