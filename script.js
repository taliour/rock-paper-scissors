//Global variables and arrays
let choices = ["rock","paper","scissors"];
let userChoice;
let validChoice = false;
let playerScore = 0;
let computerScore = 0;

//Take user input and allow only inputs for rock, paper or scissors
function getPlayerChoice(){
    while (validChoice == false){
        userChoice = prompt("Choose between, rock, paper or scissors!");
        userChoice = userChoice.toLowerCase();
        
        if (userChoice =="rock" ||userChoice == "paper" ||userChoice == "scissors") {
            validChoice = true;
        }
    }
}

//Function that plays the game with guess
function game(){
    
    getPlayerChoice();
    console.log("You chose: " + userChoice);
    console.log(decideWinner(userChoice,getComputerChoice()));
}

//make computer take a guess
function getComputerChoice(){
    let number = Math.floor(Math.random()*3);
    return choices[number];
}

//This function checks for who wins, adds score, returns the correct text
function decideWinner(playerSelection, computerSelection) {
    let str = "";
    if (playerSelection === computerSelection){
        str = "It's a draw ! You both picked: " + playerSelection;
    }
    else if (playerSelection == "rock"){
        if(computerSelection == "scissors"){
            str = "You win, " + playerSelection + " beats " + computerSelection;
            playerScore += 1;
        }
        else {
            str = "You lose, " + computerSelection + " beats " + playerSelection;
            computerScore += 1;
        }
    }
    else if (playerSelection == "paper"){
        if(computerSelection == "rock"){
            str = "You win, " + playerSelection + " beats " + computerSelection;
            playerScore += 1;
        }
        else {
            str = "You lose, " + computerSelection + " beats " + playerSelection;
            computerScore += 1;
        }
    }
    else if (playerSelection == "scissors"){
        if(computerSelection == "paper"){
            str = "You win, " + playerSelection + " beats " + computerSelection;
            playerScore += 1;
        }
        else {
            str = "You lose, " + computerSelection + " beats " + playerSelection;
            computerScore += 1;
        }
    }
    return str;
}

//Loop through the game
for (let i = 0; i < 5; i++){
    game();
    validChoice = false;
}

let str = "";
if (computerScore > playerScore){
    str = "You lose :( : ";
}
else if (computerScore < playerScore){
    str = "You win :) : ";
}
else {
    str = "it's a draw :/ : "
}
console.log(str + playerScore + "-" + computerScore);