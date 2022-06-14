let userScore = 0;
let computerScore = 0;
const desciption_p = document.getElementById("description");
const playerScore_div = document.getElementById("player-score");
const computerScore_div = document.getElementById("computer-score")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissors");



function computerPlay() {
    let answer = Math.floor(Math.random() * 3);

    if (answer === 0) {
        answer = "rock";
    }
    else if (answer === 1) {
        answer = "paper"
    }
    else if (answer === 2) {
        answer = "scissors"
    }

    return answer;
}

function playRound(playerSelection, computerSelection) {
    let finalMsg = undefined;

    if (userScore === 5 || computerScore === 5) {
        return;
    }

    let pSelection = playerSelection.toLowerCase();
    let cSelection = computerSelection.toLowerCase();

    if (pSelection === cSelection) {
        finalMsg = `Tie round! You and the computer picked ${playerSelection}.`;
    }
    else if (
        (pSelection === "rock" && cSelection === "scissors") ||
        (pSelection === "paper" && cSelection === "rock") ||
        (pSelection === "scissors" && cSelection === "paper")
    ) {
        userScore++;
        playerScore_div.textContent = userScore.toString();
        if (userScore === 5) {
            finalMsg = "YOU WIN!";
        }
        else {
            finalMsg = `You won! You picked ${playerSelection} while the computer picked ${computerSelection}.`;
        }
    }

    else if (
        (cSelection === "rock" && pSelection === "scissors") ||
        (cSelection === "paper" && pSelection === "rock") ||
        (cSelection === "scissors" && pSelection === "paper")
    ) {
        computerScore++;
        computerScore_div.textContent = computerScore.toString();
        if (computerScore === 5) {
            finalMsg = "YOU LOSE!";
        }
        else {
            finalMsg = `You lost! You picked ${playerSelection} while the computer picked ${computerSelection}.`;
        }
    }

    desciption_p.textContent = finalMsg;

}



function main() {

    rock_div.addEventListener('click', function () {
        playRound("rock", computerPlay());
    })

    paper_div.addEventListener('click', function () {
        playRound("paper", computerPlay());
    })

    scissor_div.addEventListener('click', function () {
        playRound("scissors", computerPlay());
    })

}

main();