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
    let humanInput = prompt('Choose between: \'Rock\', \'Paper\', or \'Scissors\'');
    let one = 'rock';
    let two = 'paper';
    let three = 'scissors';
    if (humanInput.toLowerCase() === one.toLowerCase()) {
        return 'Rock';
    } else if (humanInput.toLowerCase() === two.toLowerCase()) {
        return 'Paper';
    } else if (humanInput.toLowerCase() === three.toLowerCase()){
        return 'Scissors';
    } else {
        alert('Enter a valid input');
    }

}

//SCORE CONTAINER
let humanScore = 0;
let computerScore = 0

//A ROUND
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie.';
    }
    
    if (humanChoice === 'Rock') {
        if (computerChoice === 'Paper') {
            computerScore++;
            return 'You lose this round, Paper beats Rock.';
        } else if (computerChoice === 'Scissors'){
            humanScore++;
            return 'You win this round, Rock beats Scissors.';
        }
    };

    if (humanChoice === 'Paper') {
        if (computerChoice === 'Scissors') {
            computerScore++;
            return 'You lose this round, Scissors beats Paper.';
        } else if (computerChoice === 'Rock'){
            humanScore++;
            return 'You win this round, Paper beats Rock.';
        }
    };

    if (humanChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
            humanScore++;
            return 'You win this round, Scissors beats Paper.';
        } else if (computerChoice === 'Rock') {
            computerScore++;
            return 'You lose this round, Rock beats Scissors.';
        }        
    };
}

// FIVE ROUNDS
function playGame() {
    console.log('ROUND 1: ' + playRound(getHumanChoice(), getComputerChoice()));
    console.log('ROUND 2: ' + playRound(getHumanChoice(), getComputerChoice()));
    console.log('ROUND 3: ' + playRound(getHumanChoice(), getComputerChoice()));
    console.log('ROUND 4: ' + playRound(getHumanChoice(), getComputerChoice()));
    console.log('ROUND 5: ' + playRound(getHumanChoice(), getComputerChoice()));
}
playGame();

console.log('UserScore = ' + humanScore);
console.log('ComputerScore = ' + computerScore);

if (humanScore > computerScore){
    console.log('FINAL RESULT: THE USER WINS THE GAME');
} else if (humanScore < computerScore) {
    console.log('FINAL RESULT: THE COMPUTER WINS THE GAME');
} else {
    console.log('FINAL RESULT: THE GAME ENDS IN A DRAW');
}




