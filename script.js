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
function getPlayerChoice() {
    let playerChoice = prompt("What's your move?");
    return playerChoice.toLowerCase();
}

// INITIALIZE global variables for player and computer choices
const playerContainer = document.getElementById("round-player");
const computerContainer = document.getElementById("round-computer");

// REMOVE previous player and computer choices when a round is played
function removeImg() {
    if (playerContainer.firstChild) {playerContainer.removeChild(playerContainer.firstChild);}
    if (computerContainer.firstChild) {computerContainer.removeChild(computerContainer.firstChild);}
}

// DISPLAY player and computer choices when round is played
function addImg(computerChoice, playerChoice) {

    removeImg();

    const playerElem = document.createElement("img");
    
    playerElem.setAttribute("src", `images/${playerChoice}-big.jpeg`);
    playerContainer.appendChild(playerElem);

    const computerElem = document.createElement("img");
    computerElem.setAttribute("src", `images/${computerChoice}-big.jpeg`);
    computerContainer.appendChild(computerElem);

    playerElem.classList.add("bigImg");
    computerElem.classList.add("bigImg");
}

// INITIALIZE round
function playRound(computerChoice, playerChoice) {

    addImg(computerChoice, playerChoice);

    const outcomes = {
        rock: { rock: "tie", scissors: "win", paper: "lose"},
        paper: { paper: "tie", rock: "win", scissors: "lose"},
        scissors: { scissors: "tie", paper: "win", rock: "lose"}
    };

    if (outcomes[playerChoice][computerChoice] === "tie") {
        console.log("Tie!")
        playerContainer.style.border = "4px dotted white";
        computerContainer.style.border ="4px dotted white";

    } else if (outcomes[playerChoice][computerChoice] === "win") {
        console.log("You win!")
        playerContainer.style.border = "8px double orange";
        computerContainer.style.border ="4px dotted white";

    } else {
        console.log("You lose!")
        playerContainer.style.border = "4px dotted white";
        computerContainer.style.border ="8px double orange";
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
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerResult = getplayerChoice();
        let computerResult = getComputerChoice();

        playRound(computerResult, playerResult);
    }

    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore === computerScore) {
        console.log("It's a tie!");
    } else {
        console.log("You lose!");
    }
}
*/