//Global variables and arrays
let choices = ["rock","paper","scissors"];
let userChoice;
let validChoice = false;

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
    console.log(playGame(userChoice,getComputerChoice()));
}

//Loop through the game
for (let i = 0; i < 5; i++){
    game();
    validChoice = false;
}

//make computer take a guess
function getComputerChoice(){
    let number = Math.floor(Math.random()*3);
    return choices[number];
}

//This function checks for who wins and returns the correct text
function playGame(playerSelection, computerSelection) {
    let str = "";
    if (playerSelection === computerSelection){
        str = "It's a draw ! You both picked: " + playerSelection;
    }
    else if (playerSelection == "rock"){
        if(computerSelection == "scissors"){
            str = "You win, " + playerSelection + " beats " + computerSelection;
        }
        else {
            str = "You lose, " + computerSelection + " beats " + playerSelection;
        }
    }
    else if (playerSelection == "paper"){
        if(computerSelection == "rock"){
            str = "You win, " + playerSelection + " beats " + computerSelection;
        }
        else {
            str = "You lose, " + computerSelection + " beats " + playerSelection;
        }
    }
    else if (playerSelection == "scissors"){
        if(computerSelection == "paper"){
            str = "You win, " + playerSelection + " beats " + computerSelection;
        }
        else {
            str = "You lose, " + computerSelection + " beats " + playerSelection;
        }
    }
    return str;
}