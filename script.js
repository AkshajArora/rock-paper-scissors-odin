function getComputerChoice() {

    // an array with the desired values
    let array1 = ['rock', 'paper','scissors']

    // This will generate a random number between [0, array.length - 1]
    let value = Math.floor(Math.random() * array1.length)

    // print the targeted value in array1
    console.log(array1[value])
}

getComputerChoice();

function getHumanChoice() {
    let choice = prompt("Choose between 'rock', 'paper', or 'scissors'", '');

    if (choice !== null && choice !== '') 
    {
        choice = choice.toLowerCase().trim(); // Convert to lowercase and trim whitespace

        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') 
        {
            console.log(choice);
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

getHumanChoice();

let humanScore = 0;

let computerScore = 0;