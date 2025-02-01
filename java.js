const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener('click', () => {
    playRound("Rock", getComputerChoice());
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
});


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
let humanScore = 0;
let computerScore = 0;

function updateHumanScore() {
    const humScore = document.querySelector("#score1");
    humScore.textContent = `Human Score = ${humanScore}`;
}

function updateComputerScore() {
    const compScore = document.querySelector("#score2");
    compScore.textContent = `Computer Score = ${computerScore}`;
}

function checkWinner() {
    if (humanScore === 5) {
        const humanWinner = document.querySelector("#endGame");
        humanWinner.textContent = "You WIN the game!! :)";
    } else if (computerScore === 5) {
        const computerWinner = document.querySelector("#endGame");
        computerWinner.textContent = "You LOSE the game! :(";
    };
}


function playRound (humanChoice, computerChoice) {

    const output = document.querySelector("#output");

    if (humanChoice == "Rock" && computerChoice == "Rock" ||
        humanChoice == "Paper" && computerChoice == "Paper" ||
        humanChoice == "Scissors" && computerChoice == "Scissors") {
            output.textContent = "Tie game!  Please try again.";
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
            humanScore++;
            output.textContent = "You win! Rock beats scissors.";
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
            output.textContent = "You win! Paper beats rock.";
            humanScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
            output.textContent = "You win!  Scissors beats paper.";
            humanScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
            output.textContent = "You lose!  Paper beats rock."
            computerScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
            output.textContent = "You lose!  Scissors beats paper.";
            computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
            output.textContent = "You lose!  Rock beats scissors.";
            computerScore++;
    } else {
            return output.textContent = "Invalid entry.  Please try again.";
    };

updateHumanScore();
updateComputerScore();
checkWinner();
}