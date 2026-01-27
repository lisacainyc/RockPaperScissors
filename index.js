function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);
    return compChoice;
}

console.log(getComputerChoice());