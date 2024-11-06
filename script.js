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



// function getHumanChoice (one, two, three) {


// }
// getHumanChoice(Rock, Paper, Scissors);