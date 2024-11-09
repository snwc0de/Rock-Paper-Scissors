console.log("Hello World!")

// COMPUTER CHOICE
let computerinput = Math.floor(Math.random() * 3);
let getComputerChoice = function() {
    if (computerinput === 0) {
        return 'Rock';
    } else if (computerinput === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
console.log(getComputerChoice());

// HUMAN CHOICE
function getHumanChoice() {
    const humaninput = prompt('Input Your Choice');
    if (humaninput === 'Rock') {
        return 'Rock';
    } else if (humaninput === 'Paper') {
        return 'Paper';
    } else if (humaninput === 'Scissors'){
        return 'Scissors';
    } else {
        alert('Invalid');
    }
}
console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'RESULT: It\'s a tie, Go again.';
    }

    if (humanChoice === 'Rock') {
        if (computerChoice === 'Paper') {
            return 'RESULT: You lose, Paper beats Rock.';
        } else if (computerChoice === 'Scissors')
            return 'RESULT: You win, Rock beats Scissors.';
    }

    if (humanChoice === 'Paper') {
        if (computerChoice === 'Scissors') {
            return 'RESULT: You lose, Scissors beats Paper.';
        } else if (computerChoice === 'Rock')
            return 'RESULT: You win, Paper beats Rock.';
    }

    if (humanChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
            return 'RESULT: You win, Scissors beats Paper.';
        } else if (computerChoice === 'Rock')
            return 'RESULT: You lose, Rock beats Scissors.';
    }
}
playRound (getHumanChoice(), getComputerChoice());
console.log(playRound (getHumanChoice(), getComputerChoice()))


// if (getComputerChoice() === getHumanChoice()) {
//     console.log ('true');
// }

