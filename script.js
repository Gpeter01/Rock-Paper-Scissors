let gameOptions = ["Rock", "Paper", "Scissors"];
let gameRound;
let computerScore = 0;
let playerScore = 0;
let drawGame = 0;
let playerChoice;
let computerChoice;

function getComputerChoice() {
   let gameOptionIndex = Math.floor(Math.random() * 3);
   computerChoice = gameOptions[gameOptionIndex];
   return computerChoice;
} 

let humanChoice;
let clickCount = 0;
const allOptions = document.querySelectorAll(".option");
allOptions.forEach(option => {
    option.addEventListener("click", event => {
        if (clickCount == 0) {
            humanChoice = event.target.classList[1];
            clickCount++;
            refinePlayerChoice();
            getComputerChoice();
        } else {
            return;
        }
        playRound(playerChoice, computerChoice);
    })
})
function refinePlayerChoice() {
    for (let i = 0; i <= 2; i++ ) {
        if (humanChoice == gameOptions[i].toLowerCase()) {
            playerChoice = gameOptions[i];
            return playerChoice;
        }
    }
}
function playRound(playerChoiceForRound, computerChoiceForRound) {
    let perRound = document.querySelector(".per-round");

    if (playerChoiceForRound == computerChoiceForRound) {
        drawGame++;
        perRound.textContent = "It's a draw";
        perRound.style.color = "white";
    }
    if ((playerChoiceForRound == gameOptions[0] && computerChoiceForRound == gameOptions[2]) ||
        (playerChoiceForRound == gameOptions[1] && computerChoiceForRound == gameOptions[0]) ||
        (playerChoiceForRound == gameOptions[2] && computerChoiceForRound == gameOptions[1])) {
        playerScore++;
        perRound.textContent = "You win!!";
        perRound.style.color = "green";
    } else {
        if (playerChoiceForRound !== computerChoiceForRound) {
            computerScore++;
            perRound.textContent = "You lose!!";
            perRound.style.color = "red";
        }
    }
    playerChoiceForRound = "";
    computerChoiceForRound = "";
}
function playGame() {
    for (gameRound = 1; gameRound < 6; gameRound++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    let lostRound = "rounds";
    let winRound = "rounds";

    if (computerScore == 1) {
        lostRound= "round";
    } 
    if (playerScore == 1) {
        winRound = "round";
    }
    if (drawGame == 1) {
        drawGame= "one";
    }
    if (drawGame == 0) {
        drawGame = "none";
    }
    if (playerScore == 5 && computerScore == 0) {
        console.log("That's incredible");
    }
    if (playerScore == computerScore) {
        console.log(`You lost ${computerScore} ${lostRound}, won ${playerScore} and  also drew ${drawGame}`);
        console.log("What a clutch, it's a draw.");
    } else if (playerScore > computerScore) {
        console.log(`You won ${playerScore} ${winRound}, lost ${computerScore} ${lostRound} and drew ${drawGame}`);
        console.log("Congratulations, you win!!🎉🎉");
    } else if (playerScore < computerScore) {
        console.log(`You lost ${computerScore} ${lostRound}, won ${playerScore} ${winRound} and drew ${drawGame}`);
        console.log("Haha, you lost");
    }
}
playGame();