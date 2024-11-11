console.log("Hello World!")

// COMPUTER CHOICE
let getComputerChoice = function() {
    let computerinput = Math.floor(Math.random() * 3);
    if (computerinput === 0) {
        return 'Rock';
    } else if (computerinput === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

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

let humanScore = 0;
let computerScore = 0


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'RESULT: It\'s a tie.';
    }
    
    if (humanChoice === 'Rock') {
        if (computerChoice === 'Paper') {
            computerScore++;
            return 'RESULT: You lose, Paper beats Rock.';
        } else if (computerChoice === 'Scissors'){
            humanScore++;
            return 'RESULT: You win, Rock beats Scissors.';
        }
    };

    if (humanChoice === 'Paper') {
        if (computerChoice === 'Scissors') {
            computerScore++;
            return 'RESULT: You lose, Scissors beats Paper.';
        } else if (computerChoice === 'Rock'){
            humanScore++;
            return 'RESULT: You win, Paper beats Rock.';
        }
    };

    if (humanChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
            humanScor++;
            return 'RESULT: You win, Scissors beats Paper.';
        } else if (computerChoice === 'Rock') {
            computerScore++;
            return 'RESULT: You lose, Rock beats Scissors.';
        }        
    };
}


function playGame() {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
}
playGame()





























































// function gameScore() {
//     if (getWinner === 'Human wins') {
//         humanScore++;
//     } else if (getWinner === 'Computer wins') {
//         computerScore++;
//     }
// } 


console.log('UserScore = ' + humanScore);
console.log('ComputerScore = ' + computerScore);

console.log(humanSelection);
console.log(computerSelection);


