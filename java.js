
function getComputerChoice () {
    let number = Math.floor(Math.random() * 100) + 1;
    if (number <= 34) {
        return "Rock";
    } else if (number >= 67) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

function getHumanChoice() {
    let input = prompt("Rock, paper, scissors?","");
    return input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
        
    function playRound (humanChoice, computerChoice) {
        if (humanChoice == "Rock" && computerChoice == "Rock" ||
            humanChoice == "Paper" && computerChoice == "Paper" ||
            humanChoice == "Scissors" && computerChoice == "Scissors") {
                return console.log("Tie game!  Please try again.");
        } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
                return humanScore++, console.log("You win! Rock beats scissors.");
        } else if (humanChoice == "Paper" && computerChoice == "Rock") {
                return humanScore++, console.log("You win! Paper beats rock.");
        } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
                return humanScore++, console.log("You win!  Scissors beats paper.");
        } else if (humanChoice == "Rock" && computerChoice == "Paper") {
                return computerScore++, console.log("You lose!  Paper beats rock.")
        } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
                return computerScore++, console.log("You lose!  Scissors beats paper.");
        } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
                return computerScore++, console.log("You lose!  Rock beats scissors.");
        } else {
                return console.log("Invalid entry.  Please try again.");
        };
    }
    
playRound(humanSelection, computerSelection);
console.log(`Human Score = ${humanScore}`);
console.log(`Computer Score = ${computerScore}`);
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(`Human Score = ${humanScore}`);
console.log(`Computer Score = ${computerScore}`);
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(`Human Score = ${humanScore}`);
console.log(`Computer Score = ${computerScore}`);
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(`Human Score = ${humanScore}`);
console.log(`Computer Score = ${computerScore}`);
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(`Human Score = ${humanScore}`);
console.log(`Computer Score = ${computerScore}`);

function finalScore(human, computer) {
    if (human === computer) {
        return "TIE GAME!"
    } else if (human > computer) {
        return "CONGRATULATIONS!  You are a rock, paper, scissors master!" 
    } else {
        return "Woooow!  You suck at this game!"
    };
}

console.log(finalScore(humanScore, computerScore));
}

playGame(); 
    
