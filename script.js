

// Get computer choice by converting the numbers  gotten at random to strings choices
let getComputerChoice = function() {
    let computerInput = Math.floor(Math.random() * 3);
    if (computerInput === 0) {
        return 'Rock';
    } else if (computerInput === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}


// Get computer choice by prompting users to input their choice with an option to choose from
function getHumanChoice() {
    let humanInput = prompt('Choose between: \'Rock\', \'Paper\', or \'Scissors\'');
    
    let inputOne = 'rock';
    let inputTwo = 'paper';
    let inputThree = 'scissors';

    if (humanInput.toLowerCase() === inputOne.toLowerCase()) {
        return 'Rock';
    } else if (humanInput.toLowerCase() === inputTwo.toLowerCase()) {
        return 'Paper';
    } else if (humanInput.toLowerCase() === inputThree.toLowerCase()){
        return 'Scissors';
    } else {
        alert ('Enter a valid input');
    }

}


//These variables containers the gamescores for both players, it will get updated as the games goes on
let humanScore = 0;
let computerScore = 0


//Compares the human and computer choice, to increase the score variable of the round winner
function playRound (humanChoice, computerChoice) {
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


// Calls the playRound function five times to complete the game which should have a total of five rounds
function playGame () {
    console.log ('ROUND 1: ' + playRound (getHumanChoice(), getComputerChoice()));
    console.log ('ROUND 2: ' + playRound (getHumanChoice(), getComputerChoice()));
    console.log ('ROUND 3: ' + playRound (getHumanChoice(), getComputerChoice()));
    console.log ('ROUND 4: ' + playRound (getHumanChoice(), getComputerChoice()));
    console.log ('ROUND 5: ' + playRound (getHumanChoice(), getComputerChoice()));
}
playGame();


//Collects the total and final game score acquired by the human and computer respectively
function getFinalGameScores () {
    console.log ('UserScore = ' + humanScore);
    console.log ('ComputerScore = ' + computerScore);
}
getFinalGameScores();


//Compares the final game scores of the human and computer to determine and announce the winner of the game
function getGameWinner () {
    if (humanScore > computerScore){
        console.log ('FINAL RESULT: THE USER WINS THE GAME');
    } else if (humanScore < computerScore) {
        console.log ('FINAL RESULT: THE COMPUTER WINS THE GAME');
    } else {
        console.log ('FINAL RESULT: THE GAME ENDS IN A DRAW');
    }
}
getGameWinner();




