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
    return humanChoice.toLowerCase();
}

function addImg(computerChoice, humanChoice) {
    const playerContainer = document.getElementById("round-player");
    const computerContainer = document.getElementById("round-computer");

    if (playerContainer.firstChild) {playerContainer.removeChild(playerContainer.firstChild);}
    if (computerContainer.firstChild) {computerContainer.removeChild(computerContainer.firstChild);}

    const playerElem = document.createElement("img");
    
    playerElem.setAttribute("src", "images/${humanChoice}-big.jpeg");
    playerElem.setAttribute("src", `images/${humanChoice}-big.jpeg`);
    playerContainer.appendChild(playerElem);

    const computerElem = document.createElement("img");
    computerElem.setAttribute("src", "images/${computerChoice}-big.jpeg");
    computerElem.setAttribute("src", `images/${computerChoice}-big.jpeg`);
    computerContainer.appendChild(computerElem);
}

// INITIALIZE round
function playRound(computerChoice, humanChoice) {

    addImg(computerChoice, humanChoice);

    const outcomes = {
        rock: { rock: "tie", scissors: "win", paper: "lose"},
        paper: { paper: "tie", rock: "win", scissors: "lose"},
        scissors: { scissors: "tie", paper: "win", rock: "lose"}
    };

    if (outcomes[humanChoice][computerChoice] === "tie") {
        console.log("Tie!")
    } else if (outcomes[humanChoice][computerChoice] === "win") {
        console.log("You win!")
    } else {
        console.log("You lose!")
    }

    
}

const buttons = document.querySelectorAll("button.play");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(getComputerChoice(), button.id);
    })
})

/*
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
*/