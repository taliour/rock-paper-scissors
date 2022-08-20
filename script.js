//Targeting Nodes with Selectors
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const score = document.querySelector(".score");
const roundWinner = document.querySelector(".explain");
const gameWinner = document.querySelector(".announcement");

//Global variables and arrays
let choices = ["rock","paper","scissors"];
let userChoice;
let computerChoice;
let gameFinished = false;
let playerScore = 0;
let computerScore = 0;
const encouragement = ["Come one you can do this!!","I believe in you, win this!",
"Don't dissapoint me!", "I have faith in you! Win it!","Don't make me regret letting you play",
"This is important, win it", "No dinner for you if you lose this", "Win this and you will be rewarded"]

//Take user input and play the game if not finished
function getPlayerChoice(){
    paper.addEventListener("click",()=> {userChoice="paper";playGame();});
    rock.addEventListener("click", () => {userChoice="rock";playGame();});
    scissors.addEventListener("click", () => {userChoice="scissors"; playGame();});

}
//Function that plays the game
function game(){
    
    //announce round wiiner
    roundWinner.textContent = decideWinner(userChoice,getComputerChoice());

    //update the score
    score.textContent = playerScore + "-" + computerScore;

    //give encouraging comments
    gameWinner.textContent = encourageUser();

    //check if game is finished
    if (playerScore>=5 || computerScore >=5){
        gameFinished = true;
    }

    // Check who won the best of 5 and announce winner
    if (gameFinished){
        announceWinner();
    }
}
//Plays the game if game unfinished and restarts it if game is finished
function playGame(){
    if(gameFinished==false)
    {
        game();
    }
    else {
        playerScore = 0;
        computerScore = 0;
        gameFinished = false;
        score.textContent = "0-0"
        gameWinner.textContent = "Play a game of rock-paper-scissors"
        roundWinner.textContent = "Prepare for a game that will be Legen... wait for it ... DARY"
    }
}

//Choose a random encouragement text
function encourageUser(){

    let number = Math.floor(Math.random()*encouragement.length);
    return encouragement[number];
}

//Check who won the best of 5 and announce winner
function announceWinner() {
    let str = "";
    if (computerScore > playerScore){
        str = "You lose :( ";
    }
    else if (computerScore < playerScore){
        str = "You win :) ";
    }
    else {
        str = "it's a draw :/ "
    }
    gameWinner.textContent = str + "To replay click the icons again!";
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

//Play the game
getPlayerChoice();





