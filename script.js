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
    
    playerElem.setAttribute("src", `images/${playerChoice}-big.jpg`);
    playerContainer.appendChild(playerElem);

    const computerElem = document.createElement("img");
    computerElem.setAttribute("src", `images/${computerChoice}-big.jpg`);
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
        playerScore++;
        playerContainer.style.border = "4px solid orange";
        computerContainer.style.border ="4px solid orange";

    } else if (outcomes[playerChoice][computerChoice] === "win") {
        console.log("You win!")
        computerScore++;
        playerContainer.style.border = "4px solid orange";
        computerContainer.style.border ="4px solid red";

    } else {
        console.log("You lose!")
        playerContainer.style.border = "4px solid red";
        computerContainer.style.border ="4px solid orange";
    }

}

const buttons = document.querySelectorAll("button.play");
const playButton = document.getElementById("play-button");

// DEFINE scores and rounds
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

playButton.addEventListener("click", playGame);

// PLAY 5 rounds
function playGame() {

    removeImg();

    // INITIALIZE scores
    playerScore = 0;
    computerScore = 0;
    let gameRound = 1;

    const gameHeader = document.querySelector(".game-header");
    const playerHeader = document.querySelector(".player");
    const computerHeader = document.querySelector(".computer");

    playerHeader.textContent = "PLAYER";
    computerHeader.textContent = "COMPUTER";

    playButton.style.visibility = "hidden";
    gameHeader.textContent = `ROUND ${gameRound}`;

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (gameRound === 5) {
                if (playerScore > computerScore) {
                    console.log("You win!");
                    gameHeader.textContent = "YOU WIN!";
                } else if (playerScore === computerScore) {
                    console.log("It's a tie!");
                    gameHeader.textContent = "TIE!";
                } else {
                    console.log("You lose!");
                    gameHeader.textContent = "YOU LOSE!";
                }
                // RESET attributes and variables for new game
                playButton.style.visibility = "visible";
                playerContainer.style.border = "4px solid orange";
                computerContainer.style.border ="4px solid orange";
                gameRound = 1;
                return;
            }
            playRound(getComputerChoice(), button.id);
            gameRound++;
            gameHeader.textContent = `ROUND ${gameRound}`;
            playerHeader.textContent = `PLAYER: ${playerScore}`;
            computerHeader.textContent = `COMPUTER: ${computerScore}`;
        });
    });
}  