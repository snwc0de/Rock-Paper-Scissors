console.log("Hello World!")

// COMPUTER CHOICE
function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}
if (getComputerChoice(3) === 0) {
    console.log ('Rock');
} else if (getComputerChoice(3) === 1) {
    console.log ('Paper');
} else {
    console.log ('Scissors');
}

// HUMAN CHOICE

function getHumanChoice() {
  let userinput = prompt('Input Your Choice');
  if (userinput === 'Rock') {
    console.log ('Rock');
  } else if (userinput === 'Paper') {
    console.log ('Paper');
  } else if (userinput === 'Scissors'){
    console.log ('Scissors');
  }
}
getHumanChoice();

let humanScore = 0;
let computerScore = 0;

