function computerPlay() {
    let answer = Math.floor(Math.random() * 3);

    if (answer === 0) {
        answer = "Rock";
    }
    else if (answer === 1) {
        answer = "Paper"
    }
    else if (answer === 2) {
        answer = "Scissors"
    }

    return answer;
}

function playRound(playerSelection, computerSelection) {

    let finalMsg = "Test"

    let pSelection = playerSelection.toLowerCase();
    let cSelection = computerSelection.toLowerCase();

    if (pSelection === cSelection) {
        finalMsg = "Draw, play again"
    }

    else if (
        (pSelection === "rock" && cSelection === "scissors") ||
        (pSelection === "paper" && cSelection === "rock") ||
        (pSelection === "scissors" && cSelection === "paper") 
    ) {
        finalMsg = `You won! You picked ${playerSelection} while the computer picked ${computerSelection}.`;
    }

    else if (
        (cSelection === "rock" && pSelection === "scissors") ||
        (cSelection === "paper" && pSelection === "rock") ||
        (cSelection === "scissors" && pSelection === "paper") 
    ) {
        finalMsg = `You lost! You picked ${playerSelection} while the computer picked ${computerSelection}.`; 
    }

    return finalMsg
}

console.log(computerPlay());

console.log(playRound("paper", computerPlay()));