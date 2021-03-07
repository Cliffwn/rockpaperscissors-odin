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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose, paper beats rock."
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win, rock beats scissors."
    } else if (playerSelection === 'paper' && computerSelection === 'rock')
}

const playerSelection = "rock";
const computerSelection = computerPlay();

