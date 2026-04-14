let computerProb;
let choiceOne = "Rock";
let choiceTwo = "Paper";
let choiceThree = "Scissors";
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
    if (userChoice == choiceOne && computerChoice == choiceTwo) {
        computerScore++;
        console.log(`Round ${i} / 5 
            Your Choice: ${userChoice}
            Computer's Choice: ${computerChoice}
            
            You lose! Paper beats Rock`);
        alert(`Round ${i} / 5 
            Your Choice: ${userChoice}
            Computer's Choice: ${computerChoice}
            
            You lose! Paper beats Rock`);
    } else if (userChoice == choiceTwo && computerChoice == choiceOne) {
        humanScore++;
        console.log(`Round ${i} / 5 
            Your Choice: ${userChoice}
            Computer;s Choice: ${computerChoice}

            You win! Paper beats Rock`);
        alert(`Round ${i} / 5 
            Your Choice: ${userChoice}
            Computer;s Choice: ${computerChoice}

            You win! Paper beats Rock`);
    }
    if (userChoice == choiceOne && computerChoice == choiceThree) {
        humanScore++;
        console.log(`Round ${i} / 5 
            Your Choice: ${userChoice}
            Computer's Choice: ${computerChoice}

            You win! Rock beats Scissors`);
        alert(`Round ${i} / 5 
            Your Choice: ${userChoice}
            Computer's Choice: ${computerChoice}

            You win! Rock beats Scissors`);
    } else if (userChoice == choiceThree && computerChoice == choiceOne) {
        computerScore++;
        console.log(`Round ${i} / 5 
            Your Choice: ${userChoice}
            Computer's Choice: ${computerChoice}

            You lose! Rock beats Scissors`);
        alert(`Round ${i} / 5 
            Your Choice: ${userChoice}
            Computer's Choice: ${computerChoice}

            You lose! Rock beats Scissors`);
    }
    if (userChoice == choiceTwo && b == choiceThree) {
        computerScore++;
        console.log(`Round ${i} / 5 
            Your Choice: ${userChoice}
            Computer's Choice: ${computerChoice}

            You lose! Scissors beats Paper`);
        alert(`Round ${i} / 5 
            Your Choice: ${userChoice}
            Computer's Choice: ${computerChoice}

            You lose! Scissors beats Paper`);
    } else if (userChoice == choiceThree && computerChoice == choiceTwo) {
        humanScore++;
        console.log(`Round ${i} / 5 
            Your Choice: ${userChoice}
            Computer's Choice: ${computerChoice}

            You win! Scissors beats Paper`);
        alert(`Round ${i} / 5 
            Your Choice: ${userChoice}
            Computer's Choice: ${computerChoice}

            You win! Scissors beats Paper`);
    } else if (userChoice == computerChoice) {
        drawGame++;
        console.log(`Round ${i} / 5 
            Your Choice: ${userChoice}
            Computer's Choice: ${computerChoice}
            
            Draw!!`);
        alert(`Round ${i} / 5
            Your Choice: ${userChoice}
            Computer's Choice: ${computerChoice}
            
            Draw!!`);
    }
    if (userChoice != undefined || null) {
        console.log("");
        console.log("");
    }
}
function playGame() {
    for (i = 1; i < 6; i++) {
        computerProb = Math.floor(Math.random() * 100);
        let a = getHumanChoice();
        let b = getComputerChoice();
        playRound(a, b);
        
    }
    humanScore;
    computerScore;
    let lostRound = "rounds";
    let winRound = "rounds";

    if (computerScore == 1) {
        lostRound= "round";
    } 
    if (humanScore == 1) {
        winRound = "round";
    }
    if (drawGame == 1) {
        drawGame= "one";
    }
    if (drawGame == 0) {
        drawGame = "none";
    }
    if (humanScore == 5 && computerScore == 0) {
        console.log("That's incredible");
    }
    if (humanScore == computerScore) {
        console.log(`You lost ${computerScore} ${lostRound}, won ${humanScore} and  also drew ${drawGame}`);
        console.log("What a clutch, it's a draw.");
    } else if (humanScore > computerScore) {
        console.log(`You won ${humanScore} ${winRound}, lost ${computerScore} ${lostRound} and drew ${drawGame}`);
        console.log("Congratulations, you win!!🎉🎉");
    } else if (humanScore < computerScore) {
        console.log(`You lost ${computerScore} ${lostRound}, won ${humanScore} ${winRound} and drew ${drawGame}`);
        console.log("Haha, you lost");
    }
}