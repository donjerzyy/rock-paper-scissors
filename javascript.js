
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors' ];
    let randomIndex;
    while (true) {
        randomIndex = Math.floor(Math.random()*10);
        if(randomIndex<=2) {
            break;
        }
    }
    return options[randomIndex]
}


function playRound(playerSeclection, computerSelection) {
    if (playerSeclection === computerSelection) {
        let capitaliseFirst = playerSeclection[0];
        let word = capitaliseFirst.toUpperCase() + playerSeclection.substring(1) 
        return [`You both chose the ${word}, this round ends in a draw`, 'draw']
    } else if (playerSeclection === "rock" && computerSelection === "paper") {
        return [`You lost, Paper beats Rock :(`, 'comp']
    } else if (playerSeclection === "rock" && computerSelection === "scissors") {
        return [`You won, Rock beats Scissors :)`, 'player']
    } else if (playerSeclection === "paper" && computerSelection === "rock") {
        return [`You won, Paper beats Rock :)`, 'player']
    } else if(playerSeclection === "paper" && computerSelection === "scissors") {
        return [`You lost, Scissors beats Paper :(`, 'comp']
    } else if(playerSeclection === "scissors" && computerSelection === "rock") {
        return [`You lost, Rock beats Scissors :(`, 'comp']
    } else if(playerSeclection === "scissors" && computerSelection === "paper") {
        return [`You won, Scissors beats Paper :)` , 'player']
    } else {
        return [`What the heck did you pick! :o`, 'invalid']
        }
}


function game() {

    let playerScore = 0;
    let computerScore = 0;

}



const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

let result;
rockButton.addEventListener('click', ()=> {
    result = playRound('rock', getComputerChoice());
});

paperButton.addEventListener('click', ()=> {
    result = playRound('rock', getComputerChoice());
});

scissorsButton.addEventListener('click', ()=> {
    result = playRound('rock', getComputerChoice());
});




