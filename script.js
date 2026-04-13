let computerProb;
let choiceOne = "rock";
let choiceTwo = "paper";
let choiceThree = "scissors";
let computerScore = 0;
let humanScore = 0;
let drawGame = 0;
let userChoice;
let computerChoice;
let i;

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
} function getHumanChoice() {
    let question;
    if (i == 5) {
        question = prompt("Rock, paper or scissors? FINAL ROUND!!");
    } else {
        question = prompt(`Rock, paper or scissors? Round ${i}`);
    }
    let questionTrim = question.trimEnd();
    let questionLowerCase = questionTrim.toLowerCase();

    if (questionLowerCase == "rock") {
        userChoice = choiceOne;
    } else if (questionLowerCase == "paper") {
        userChoice = choiceTwo;
    } else if (questionLowerCase == "scissors") {
        userChoice = choiceThree;
    } else {
        alert("Wrong Input");
        return;
    }
}