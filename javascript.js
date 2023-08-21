
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
        return [`What the heck did you pick! :o`, 'draw']
        }
}



// code to test play round function

/*const playerSelection = "rock";
*const computerSelection = getComputerChoice();
* console.log(playRound(playerSelection, computerSelection));
*/

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for(i=0; i<5; i++) {
        let playerChoice = prompt("What is your play? (Rock/Paper/Scissors)");
        let computerChoice = getComputerChoice();
        let result = playRound(
           playerChoice.toLocaleLowerCase(),
            computerChoice
        );
        
        if (result[1] === 'comp') {
            computerScore += 1
        } else if (result[1] === 'player') {
            playerScore += 1
        }

        alert(result[0]);
    }

    if(playerScore === computerScore) {
        alert(`The game ended in a ${playerScore}-${playerScore} draw`)
    } else if (playerScore < computerScore) {
        alert(`Congratulations! You won ${playerScore}-${computerScore}`)
    } else {
        alert(`You lost ${playerScore}-${computerScore}. Better luck next time`)
    }

}

game();