// OBTAIN computer's choice
function getComputerChoice() {
    const getRandomInt = function(max) {
        return Math.floor(Math.random() * max);
    }

    let value = getRandomInt(3);

    let computerChoice = "null";

    if (value === 0) {
        computerChoice = "rock";
        console.log("Computer plays rock.");
    } else if (value === 1) {
        computerChoice = "paper";
        console.log("Computer plays paper.");
    } else {
        computerChoice =  "scissors";
        console.log("Computer plays scissors.");
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
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! Scissors beat paper.")
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win! Scissors beat paper.");
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! Rock beats scissors.")
        humanScore++;
    }
}


// PLAY 5 rounds
function playGame() {
    // INITIALIZE scores
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanResult = getHumanChoice();
        let computerResult = getComputerChoice();

        playRound(computerResult, humanResult);
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore === computerScore) {
        console.log("It's a tie!");
    } else {
        console.log("You lose!");
    }
}