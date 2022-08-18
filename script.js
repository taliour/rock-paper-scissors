let choices = ["rock","paper","scissors"];
let userChoice;
let validChoice = false;
while (validChoice == false){
    userChoice = prompt("Choose between, rock, paper or scissors!");
    userChoice = userChoice.toLowerCase();
    
    if (userChoice =="rock" ||userChoice == "paper" ||userChoice == "scissors") {
        validChoice = true;
    }

}
console.log(userChoice);
function getComputerChoice(){
    let number = Math.floor(Math.random()*3);
    return choices[number];
}
console.log(getComputerChoice())