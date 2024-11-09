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
console.log('UserScore = ' + humanScore);
console.log('ComputerScore = ' + computerScore);

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice === computerChoice) {
//         return 'RESULT: It\'s a tie, Go again.';
//     }

//     if (humanChoice === 'Rock') {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         if (computerChoice === 'Paper') {
//             return 'RESULT: You lose, Paper beats Rock.';
//         } else if (computerChoice === 'Scissors')
//             return 'RESULT: You win, Rock beats Scissors.';
//     }

//     if (humanChoice === 'Paper') {
//         if (computerChoice === 'Scissors') {
//             return 'RESULT: You lose, Scissors beats Paper.';
//         } else if (computerChoice === 'Rock')
//             return 'RESULT: You win, Paper beats Rock.';
//     };

//     if (humanChoice === 'Scissors') {
//         if (computerChoice === 'Paper') {
//             return 'RESULT: You win, Scissors beats Paper.';
//         } else if (computerChoice === 'Rock')
//             return 'RESULT: You lose, Rock beats Scissors.';
//     };

// }
// playRound (humanSelection, computerSelection);
// console.log(playRound (humanSelection, computerSelection))

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log ('RESULT: It\'s a tie, Go again.');
        return 'a tie';
    }
    
    if (humanChoice === 'Rock') {
        if (computerChoice === 'Paper') {
            console.log ('RESULT: You lose, Paper beats Rock.');
            return 'Computer wins';
        } else if (computerChoice === 'Scissors')
            console.log ('RESULT: You win, Rock beats Scissors.');
            return 'Human wins';
    }

    if (humanChoice === 'Paper') {
        if (computerChoice === 'Scissors') {
            console.log ('RESULT: You lose, Scissors beats Paper.');
            return 'Computer wins';
        } else if (computerChoice === 'Rock')
            console.log ('RESULT: You win, Paper beats Rock.');
            return 'Human wins';
    };

    if (humanChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
            console.log ('RESULT: You win, Scissors beats Paper.');
            return 'Human wins';
        } else if (computerChoice === 'Rock')
            console.log ('RESULT: You lose, Rock beats Scissors.');
            return 'Computer wins';
    };
    
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound (humanSelection, computerSelection);

console.log(humanSelection);
console.log(computerSelection);


