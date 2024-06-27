const results = document.querySelector('#results')
let content;

let humanSelection;
let computerSelection;
let count = 0
let humanScore = 0;
let computerScore = 0;

let btn1 = document.querySelector('#rock')
let btn2 = document.querySelector('#paper')
let btn3 = document.querySelector('#scissors')

let humanChoice;
let computerChoice;


function getComputerChoice() {

    let array1 = ['rock', 'paper','scissors']

    let value = Math.floor(Math.random() * array1.length)

    results.innerHTML = (`Computer: ${array1[value]}`);

    return array1[value];
}


if(btn1) {
    btn1.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        let humanSelection = 'rock';
        results.innerHTML += ('<br>Human: rock')
        playRound(humanSelection, computerSelection);
    });
}
if(btn2) {
    btn2.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        let humanSelection = 'paper';
        results.innerHTML += ('<br>Human: paper')
        playRound(humanSelection, computerSelection);
    });
}
if(btn3) {
    btn3.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        let humanSelection = 'scissors';
        results.innerHTML += ('<br>Human: scissors')
        playRound(humanSelection, computerSelection);
    });
}


function playRound(humanChoice, computerChoice) {

    let a = humanChoice
    let b = computerChoice

    // tie
    if((a === 'paper' && b === 'paper') 
        || (a === 'scissors' && b === 'scissors')
        || (a === 'rock' && b === 'rock'))
    {
        results.innerHTML += (`<br>Human Score: ${humanScore}`)
        results.innerHTML += (`<br>Computer Score: ${computerScore}`)
        results.innerHTML += ('<h4>Its a tie!</h4><hr>')
    }   
    // human win
    else if((a === 'paper' && b === 'rock')
            || (a === 'scissors' && b === 'paper')
            || (a === 'rock' && b === 'scissors'))
    {
        humanScore++;
        results.innerHTML += (`<br>Human Score: ${humanScore}`)
        results.innerHTML += (`<br>Computer Score: ${computerScore}`)
        results.innerHTML += ('<h4>Human Wins!</h4><hr>')
    }
    // computer win
    else if((a === 'paper' && b === 'scissors')
            || (a === 'scissors' && b === 'rock')
            || (a === 'rock' && b === 'paper'))
    {
        computerScore++;
        results.innerHTML += (`<br>Human Score: ${humanScore}`)
        results.innerHTML += (`<br>Computer Score: ${computerScore}`)
        results.innerHTML += ('<h4>Computer Wins!</h4><hr>')
    }

    console.log('-----------------------------------------------------------------------------------------------------------------')
    if(humanScore === 5) {
        results.innerHTML = '<h2>Human Wins!!!</h2>'
        results.innerHTML += (`<br>Human Score: ${humanScore}`)
        results.innerHTML += (`<br>Computer Score: ${computerScore}`)
    }
    else if(computerScore === 5) {
        results.innerHTML = '<h2>Computer Wins!!!</h2>'
        results.innerHTML += (`<br>Human Score: ${humanScore}`)
        results.innerHTML += (`<br>Computer Score: ${computerScore}`)
    }
}
