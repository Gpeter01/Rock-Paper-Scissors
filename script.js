let gameOptions = ["Rock", "Paper", "Scissors"];
let gameRound;
let computerScore = 0;
let playerScore = 0;
let draw = 0;
let drawGame = draw;
let playerChoice;
let computerChoice;
let numberOfRounds = 1;

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
        displayScore();
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
    if (numberOfRounds > 5) {
        return;
    }
    const perRound = document.querySelector(".per-round");
    const theRound = document.querySelector(".theround");

    if (playerChoiceForRound == computerChoiceForRound) {
        draw++;
        perRound.textContent = "It's a draw";
        perRound.style.color = "white";
    }
    if ((playerChoiceForRound == gameOptions[0] && computerChoiceForRound == gameOptions[2]) ||
        (playerChoiceForRound == gameOptions[1] && computerChoiceForRound == gameOptions[0]) ||
        (playerChoiceForRound == gameOptions[2] && computerChoiceForRound == gameOptions[1])) {
        playerScore++;
        perRound.textContent = `You win!! ${playerChoiceForRound} beats ${computerChoiceForRound}`;
        perRound.style.color = "green";
    } else {
        if (playerChoiceForRound !== computerChoiceForRound) {
            computerScore++;
            perRound.textContent = `You lose!! ${computerChoiceForRound} beats ${playerChoiceForRound}`;
            perRound.style.color = "red";
        }
    }
    numberOfRounds++;
    playerChoiceForRound = "";
    computerChoiceForRound = "";

    let timeBeforeNextRound = 4;
    if (numberOfRounds <= 5) {
        const theInterval = setInterval(() => {
        let nextRound = document.querySelector(".next-round");
        if (timeBeforeNextRound == 0) {
            nextRound.textContent = "";
            perRound.textContent = "";
            clickCount = 0;
            if (numberOfRounds == 5) {
                theRound.textContent = "Final Round"
            } else {
                if (numberOfRounds < 5) {
                    theRound.textContent = `Round ${numberOfRounds} of 5`;
                }
            }
            clearInterval(theInterval);
        } else {
            nextRound.textContent = `Next round begins in ${timeBeforeNextRound} seconds`;
            timeBeforeNextRound--;
        }
    }, 1000);
    }
    if (playerScore + computerScore + draw == 5) {
        decideWinner();
    }
}

function displayScore() {
    const userOutput = document.querySelector(".main-output.user");
    const computerOutput = document.querySelector(".main-output.computer");
    const numberOfDraws = document.querySelector(".number-of-draws");
    
    userOutput.textContent = playerScore;
    computerOutput.textContent = computerScore;
    numberOfDraws.textContent = draw;
}

function restartGame() {
    document.querySelector(".per-round").textContent = "";
    clickCount = 0;
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".main-output.user").textContent = 0;
    document.querySelector(".main-output.computer").textContent = 0;
}
let restart = document.querySelector(".restart");
restart.addEventListener("click", restartGame);

function decideWinner() {
    const winner = document.querySelector(".result");
    const additionalInfo = document.querySelector(".additional-info");
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
        additionalInfo.textContent = "That's incredible";
    }
    if (playerScore == computerScore) {
       additionalInfo.textContent = `You lost ${computerScore} ${lostRound}, won ${playerScore} and  also drew ${drawGame}`;
        winner.textContent = "What a clutch, it's a draw.";
        winner.style.color = "white";
    } else if (playerScore > computerScore) {
       additionalInfo.textContent = `You won ${playerScore} ${winRound}, lost ${computerScore} ${lostRound} and drew ${drawGame}`;
        winner.textContent = "Congratulations, you win!!🎉🎉";
        winner.style.color = "green";
    } else if (playerScore < computerScore) {
        additionalInfo.textContent = `You lost ${computerScore} ${lostRound}, won ${playerScore} ${winRound} and drew ${drawGame}`;
        winner.textContent = "Haha, you lost";
        winner.style.color = "red";
    }
}