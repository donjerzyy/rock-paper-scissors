
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



console.log(getComputerChoice());