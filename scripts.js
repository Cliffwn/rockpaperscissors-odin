function computerPlay() {
    var choice = Math.random() * 3;

    if (choice > 0 && choice <= 1) {
        return 'Rock';
    } else if (choice > 1 && choice <= 2) {
        return 'Paper';
    } else {
        return 'Scissors';
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
function game(playerSelection) {

    function playRound(computerSelection) {
        let result = document.createElement('h1');
        if (playerSelection === computerSelection) {
            result.innerHTML = "It's a tie!";
            document.body.appendChild(result);
        } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
            result.innerHTML = "You lose, ${computerSelection} beats ${playerSelection}";
            document.body.appendChild(result);
        } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
            result.innerHTML = "You win, ${playerSelection} beats ${computerSelection}";
            document.body.appendChild(result);
        } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            result.innerHTML = "You win, ${playerSelection} beats ${computerSelection}";
            document.body.appendChild(result);
        } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
            result.innerHTML = "You lose, ${computerSelection} beats ${playerSelection}";
            document.body.appendChild(result);
        } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
            result.innerHTML = "You lose, ${computerSelection} beats ${playerSelection}";
            document.body.appendChild(result);
        } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
            result.innerHTML = "You win, ${playerSelection} beats ${computerSelection}";
            document.body.appendChild(result);
        }
    }

    const computerSelection = computerPlay();
    playRound(computerSelection);
}

const playButton = document.createElement("button");
playButton.innerHTML = 'Play';

document.body.appendChild(playButton);

playButton.addEventListener('click', () => {
    let rockButton = document.createElement("button");
    rockButton.innerHTML = 'Rock';
    rockButton.id = 'playerChoiceButton';
    let paperButton = document.createElement("button");
    paperButton.innerHTML = 'Paper';
    paperButton.id = 'playerChoiceButton';
    let scissorsButton = document.createElement("button");
    scissorsButton.innerHTML = 'Scissors';
    scissorsButton.id = 'playerChoiceButton';

    document.body.appendChild(rockButton);
    document.body.appendChild(paperButton);document.body.appendChild(rockButton);
    document.body.appendChild(scissorsButton);

});

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'playerChoiceButton'){
        game(playerSelection = e.target.innerHTML);
        console.log(e.target.innerHTML);
    }
});