//Targeting Nodes with Selectors
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const score = document.querySelector(".score");
const roundWinner = document.querySelector(".explain");

//Global variables and arrays
let choices = ["rock","paper","scissors"];
let userChoice;
let computerChoice;
let validChoice = true;
let playerScore = 0;
let computerScore = 0;

//Take user input and play the game if not finished
function getPlayerChoice(){
    paper.addEventListener("click",()=> {userChoice="paper"; if(validChoice == true) {game()};});
    rock.addEventListener("click", () => {userChoice="rock"; if(validChoice == true) {game()};});
    scissors.addEventListener("click", () => {userChoice="scissors"; if(validChoice == true) {game()};});

}
//Function that plays the game
function game(){
    
    //announce round wiiner
    roundWinner.textContent = decideWinner(userChoice,getComputerChoice());

    //update the score
    score.textContent = playerScore + "-" + computerScore;


    // Check who won the best of 5 and announce winner
    if (playerScore >= 3 || computerScore >= 3){
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
        validChoice = false;
    }
}

//make computer take a guess, assign computerChoice value and return that value
function getComputerChoice(){
    let number = Math.floor(Math.random()*3);
    computerChoice = choices[number];
    return choices[number];
}

//This function checks for who wins, adds score, returns the correct text
function decideWinner(playerSelection, computerSelection) {
    let str = "";
    if (playerSelection === computerSelection){
        str = "It's a draw! You both picked " + playerSelection;
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

//styling border images when hovered

rock.addEventListener("mouseover",()=> {rock.style.cssText = "border: solid #856e21 6px"});
rock.addEventListener("mouseout",()=> {rock.style.cssText="border: solid black 4px"});

paper.addEventListener("mouseover",()=> {paper.style.cssText = "border: solid #856e21 6px"});
paper.addEventListener("mouseout",()=> {paper.style.cssText="border: solid black 4px"});

scissors.addEventListener("mouseover",()=> {scissors.style.cssText = "border: solid #856e21 6px"});
scissors.addEventListener("mouseout",()=> {scissors.style.cssText="border: solid black 4px"});


getPlayerChoice();





