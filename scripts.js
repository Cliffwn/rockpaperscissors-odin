function computerPlay() {
    var choice = Math.random() * 3;

    if (choice > 0 && choice <= 1) {
        return 'rock';
    } else if (choice > 1 && choice <= 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// function testComputerPlay(n) {
//     var i = 0;
//     var log = '';

//     while (i < n) {
//         log = log + computerPlay();
//         i++;
//     }

//     return log;
// }
function game() {

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            console.log("It's a tie!");
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            console.log("You lose, paper beats rock.");
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log("You win, rock beats scissors.")
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            console.log("You win, paper beats rock.")
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            console.log("You lose, scissors beats paper.")
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            console.log("You lose, rock beats scissors.")
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            console.log("You win, scissors beats paper.")
        }
    }

    const playerSelection = prompt("Make your choice: ");
    const computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection))

}
