function getComputerChoice() {

    // an array with the desired values
    let array1 = ['rock', 'paper','scissors']

    // This will generate a random number between [0, array.length - 1]
    let value = Math.floor(Math.random() * array1.length)

    // print the targeted value in array1
    console.log(array1[value])
}

getComputerChoice();