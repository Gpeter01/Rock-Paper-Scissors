let gameOptions = ["Rock", "Paper", "Scissors"];
let gameRound;
let computerScore = 0;
let playerScore = 0;
let drawGame = 0;
let playerChoice;
let computerChoice;

function getComputerChoice() {
   let gameOptionIndex = Math.floor(Math.random() * 3);
   return gameOptions[gameOptionIndex];
} 
function getHumanChoice() {
    let gameQuestion;
    if (gameRound == 5) {
        gameQuestion = prompt("Rock, paper or scissors? FINAL ROUND!!");
    } else {
        gameQuestion = prompt(`Rock, paper or scissors? Round ${gameRound}`);
    }
    let gameQuestionTrim = gameQuestion.trim();
    let gameQuestionLowerCase = gameQuestionTrim.toLowerCase();

    if (gameQuestionLowerCase == "rock") {
        playerChoice = gameOptions[0];
    } else if (gameQuestionLowerCase == "paper") {
        playerChoice = gameOptions[1];
    } else if (gameQuestionLowerCase == "scissors") {
        playerChoice = gameOptions[2];
    } else {
        alert("Wrong Input");
        return getHumanChoice();
    }
    return playerChoice;
}
function playRound(playerChoiceForRound, computerChoiceForRound) {
    if (playerChoiceForRound == computerChoiceForRound) {
        drawGame++;
        console.log(`Round ${gameRound} / 5 
            Your Choice: ${playerChoiceForRound}
            Computer's Choice: ${computerChoiceForRound}
            
            Draw!!`);
        alert(`Round ${gameRound} / 5
            Your Choice: ${playerChoiceForRound}
            Computer's Choice: ${computerChoiceForRound}
            
            Draw!!`);
    }
    if ((playerChoiceForRound == gameOptions[0] && computerChoiceForRound == gameOptions[2]) ||
        (playerChoiceForRound == gameOptions[1] && computerChoiceForRound == gameOptions[0]) ||
        (playerChoiceForRound == gameOptions[2] && computerChoiceForRound == gameOptions[1])) {
        playerScore++;
        console.log(`Round ${gameRound} / 5 
            Your Choice: ${playerChoiceForRound}
            Computer's Choice: ${computerChoiceForRound}

            You win!! ${playerChoiceForRound} beats ${computerChoiceForRound}`);
        alert(`Round ${gameRound} / 5 
            Your Choice: ${playerChoiceForRound}
            Computer's Choice: ${computerChoiceForRound}

            You win!! ${playerChoiceForRound} beats ${computerChoiceForRound}`);
    } else {
        if (playerChoiceForRound !== computerChoiceForRound) {
            computerScore++;
            console.log(`Round ${gameRound} / 5
                Your Choice: ${playerChoiceForRound}
                Computer's Choice: ${computerChoiceForRound}
                
                You lose! ${computerChoiceForRound} beats ${playerChoiceForRound}`);
            alert(`Round ${gameRound} / 5
                Your Choice: ${playerChoiceForRound}
                Computer's Choice: ${computerChoiceForRound}
                
                You lose! ${computerChoiceForRound} beats ${playerChoiceForRound}`);
        }
    }
    console.log("");
    console.log("");
    playerChoiceForRound = "";
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