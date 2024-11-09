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
getComputerChoice();
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
getHumanChoice();



if (getComputerChoice === getHumanChoice) {
    console.log ('true');
}

