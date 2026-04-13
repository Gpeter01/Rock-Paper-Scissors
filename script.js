let computerProb;
let choiceOne = "rock";
let choiceTwo = "paper";
let choiceThree = "scissors";
let computerScore = 0;
let humanScore = 0;
let drawGame = 0;
let userChoice;
let computerChoice;

function getComputerChoice() {
    if (computerProb < 33) {
        computerChoice = choiceOne;
    }
    if (computerProb >= 33 && computerProb < 66) {
        computerChoice = choiceTwo;
    }
    if (computerProb >= 66 && computerProb < 100) {
        computerChoice = choiceThree;
    }
}