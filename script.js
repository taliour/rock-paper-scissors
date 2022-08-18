let choices = ["rock","paper","scissors"];

let userChoice = prompt();
console.log(userChoice);

function getComputerChoice(){
    let number = Math.floor(Math.random()*3);
    return choices[number];
}
console.log(getComputerChoice())