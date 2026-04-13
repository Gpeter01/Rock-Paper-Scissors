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
function playRound(a, b) {
    if (a == choiceOne && b == choiceTwo) {
        computerScore++;
        console.log(`Round ${i} / 5 
            Your Choice: ${a}
            Computer's Choice: ${b}
            
            You lose! Paper beats Rock`);
        alert(`Round ${i} / 5 
            Your Choice: ${a}
            Computer's Choice: ${b}
            
            You lose! Paper beats Rock`);
    } else if (a == choiceTwo && b == choiceOne) {
        humanScore++;
        console.log(`Round ${i} / 5 
            Your Choice: ${a}
            Computer;s Choice: ${b}

            You win! Paper beats Rock`);
        alert(`Round ${i} / 5 
            Your Choice: ${a}
            Computer;s Choice: ${b}

            You win! Paper beats Rock`);
    }
    if (a == choiceOne && b == choiceThree) {
        humanScore++;
        console.log(`Round ${i} / 5 
            Your Choice: ${a}
            Computer's Choice: ${b}

            You win! Rock beats Scissors`);
        alert(`Round ${i} / 5 
            Your Choice: ${a}
            Computer's Choice: ${b}

            You win! Rock beats Scissors`);
    } else if (a == choiceThree && b == choiceOne) {
        computerScore++;
        console.log(`Round ${i} / 5 
            Your Choice: ${a}
            Computer's Choice: ${b}

            You lose! Rock beats Scissors`);
        alert(`Round ${i} / 5 
            Your Choice: ${a}
            Computer's Choice: ${b}

            You lose! Rock beats Scissors`);
    }
    if (userChoice == choiceTwo && b == choiceThree) {
        computerScore++;
        console.log(`Round ${i} / 5 
            Your Choice: ${a}
            Computer's Choice: ${b}

            You lose! Scissors beats Paper`);
        alert(`Round ${i} / 5 
            Your Choice: ${a}
            Computer's Choice: ${b}

            You lose! Scissors beats Paper`);
    } else if (a == choiceThree && b == choiceTwo) {
        humanScore++;
        console.log(`Round ${i} / 5 
            Your Choice: ${a}
            Computer's Choice: ${b}

            You win! Scissors beats Paper`);
        alert(`Round ${i} / 5 
            Your Choice: ${a}
            Computer's Choice: ${b}
            You win! Scissors beats Paper`);
    } else if (userChoice == b) {
        drawGame++;
        console.log(`Round ${i} / 5 
            Your Choice: ${a}
            Computer's Choice: ${b}
            
            
            Draw!!`);
        alert(`Your Choice: ${a}
            Computer's Choice: ${b}
            
            
            Draw!!`);
    }
    if (a != undefined || null) {
        console.log("");
        console.log("");
    }
}