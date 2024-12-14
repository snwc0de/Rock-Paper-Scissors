
//DOM MANIPULATION
const playerBtn = document.querySelector("#playerBtn");
const output = document.querySelector("#output");
const output2 = document.querySelector("#output2");
const result = document.querySelector("#result");
const score = document.querySelector("#div");
const final = document.querySelector("#final");


//player selects between "Rock", "Paper" or "Scissors" on button click
document.querySelector(".btnRock").addEventListener("click", () => {
    const playerChoice = "Rock";
    playRound(playerChoice, getComputerChoice());
    output.textContent = `${user[0]} selects ${playerChoice}`;
    getScore(getGameWinner())
})

document.querySelector(".btnPaper").addEventListener("click", () => {
    const playerChoice = "Paper";
    playRound(playerChoice, getComputerChoice());
    output.textContent = `${user[0]} selects ${playerChoice}`; 
    getScore(getGameWinner())
})

document.querySelector(".btnScissors").addEventListener("click", () => {
    const playerChoice = "Scissors";
    playRound(playerChoice, getComputerChoice());  
    output.textContent = `${user[0]} selects ${playerChoice}`;
    getScore(getGameWinner());
})


// Get computer choice by converting the numbers  gotten at random to strings choices
function getComputerChoice () {
    let computerInput = Math.floor(Math.random() * 3);
    if (computerInput === 0) {
        const computerChoice = "Rock"
        output2.textContent = `${user[1]} selects ${computerChoice}`;
        return "Rock";
    } else if (computerInput === 1) {
        const computerChoice = "Paper"
        output2.textContent = `${user[1]} selects ${computerChoice}`;
        return 'Paper';
    } else {
        const computerChoice = "Scissors"
        output2.textContent = `${user[1]} selects ${computerChoice}`;
        return 'Scissors';
    }
}


//Compares the player and computer choice, to increase the score variable of the round winner
function playRound (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        result.textContent = 'RESULT: It\'s a tie!';
    }
    
    if (playerChoice === 'Rock') {
        if (computerChoice === 'Paper') {
            ++computerScore;
            result.textContent = 'RESULT: You lose!, Paper beats Rock.';
        } else if (computerChoice === 'Scissors'){
            ++playerScore;
            result.textContent = 'RESULT: You win!, Rock beats Scissors.';
        } 
    };

    if (playerChoice === 'Paper') {
        if (computerChoice === 'Scissors') {
            ++computerScore;
            result.textContent = 'RESULT: You lose!, Scissors beats Paper.';
        } else if (computerChoice === 'Rock'){
            ++playerScore;
            result.textContent = 'RESULT: You win!, Paper beats Rock.';
        }; 
    };
    
    if (playerChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
            ++playerScore;
            result.textContent = 'RESULT: You win!, Scissors beats Paper.';
        } else if (computerChoice === 'Rock') {
            ++computerScore;
            result.textContent = 'RESULT: You lose!, Rock beats Scissors.';
        };     
    };
};


//These variables containers the gamescores for both players, it will get updated as the games goes on
let playerScore = 0;
let computerScore = 0;

let user = ["Player", "Computer"];

//Updates and announces the scores of player and computer
function getScore(winner) {
    document.querySelector(".pScore").textContent = `${user[0]} Score = ${playerScore}`;
    document.querySelector(".cScore").textContent = `${user[1]} Score = ${computerScore}`;
}

//checks gradually if either player scores has reached 5
function isGameOver () {
    if (playerScore === 5 || computerScore === 5) {
        return true;
    } else {
        return false;
    }
}


//Declare the winner if a players score reaches 5 first
function getWinner () {
    let winner = (playerScore === 5) ? user[0]: user[1];
    final.textContent = `GAME OVER: ${winner} wins the game`;
}

//Ends the game if a player score reaches 5
function getGameWinner () {
    if (isGameOver()) {
        getWinner();
    } else {
        final.textContent = "Game is still on";
    }
}










