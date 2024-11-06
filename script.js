console.log("Hello World!")
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


let human = getHumanChoice(3);
function getHumanChoice(max) {
  let human = prompt('Input Your Choice');
  if (human === 'Rock') {
    console.log ('Rock');
  } else if (human === 'Paper') {
    console.log ('Paper');
  } else if (human === 'Scissors'){
    console.log ('Scissors');
  }
}

