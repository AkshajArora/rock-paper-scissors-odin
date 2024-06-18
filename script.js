// Step 2

function getComputerChoice() {

    // an array with the desired values
    let array1 = ['rock', 'paper','scissors']

    // This will generate a random number between [0, array.length - 1]
    let value = Math.floor(Math.random() * array1.length)

    // print the targeted value in array1
    console.log("Computer:",array1[value])

    return array1[value];
}


// Step 3

function getHumanChoice() {
    let choice = prompt("Choose between 'rock', 'paper', or 'scissors'", '');

    if (choice !== null && choice !== '') 
    {
        choice = choice.toLowerCase().trim(); // Convert to lowercase and trim whitespace

        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') 
        {
            console.log("Human:",choice);
            return choice;
        } 
        else 
        {
            console.log("Invalid Choice! Please choose 'rock', 'paper', or 'scissors'.");
        }
    }
    else if(choice === '') 
    {
        console.log("Input was empty or canceled. Please choose 'rock', 'paper', or 'scissors'.");
    }
    else 
    {
        console.log("Input was empty or canceled.");
    }
}


// Step 4

let humanScore = 0;

let computerScore = 0;

// Step 5

let humanSelection = getHumanChoice()
let computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection);

function playRound(humanChoice, computerChoice) {

    let a = humanChoice
    let b = computerChoice
    // console.log(humanChoice)
    // console.log(computerChoice)
    if((a === 'paper' && b === 'paper') 
        || (a === 'scissors' && b === 'scissors')
        || (a === 'rock' && b === 'rock'))
    {
        console.log("Its a tie!")
    }   
    else if((a === 'paper' && b === 'rock')
            || (a === 'scissors' && b === 'paper')
            || (a === 'rock' && b === 'scissors'))
    {
        console.log("Human wins!")
    }
    else if((a === 'paper' && b === 'scissors')
            || (a === 'scissors' && b === 'rock')
            || (a === 'rock' && b === 'paper'))
    {
        console.log("Computer wins!")
    }
}
