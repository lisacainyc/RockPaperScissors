function getComputerChoice(){
    let result = Math.floor(Math.random() * 3);
    switch(result){
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper"
            break;
        case 2:
            result = "scissors";
            break;
    }
    return result;
}

function getHumanChoice(){
    let input = prompt("Enter rock, paper, or scissors");
    return input;
}

const computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    let humanResult;

    if (humanChoice === "rock"){
        switch(computerChoice){
            case "rock": 
                humanResult = "draw";
                break;
            case "paper": 
                humanResult = "lose";
                break;
            case "scissors": 
                humanResult = "win";
                break;               
            } 
    } else if (humanChoice === "paper") {
        switch(computerChoice){
            case "rock": 
                humanResult = "win";
                break;
            case "paper": 
                humanResult = "draw";
                break;
            case "scissors": 
                humanResult = "lose";
                break;               
            } 
    } else if (humanChoice === "scissors") {
        switch(computerChoice){
            case "rock": 
                humanResult = "lose";
                break;
            case "paper": 
                humanResult = "win";
                break;
            case "scissors": 
                humanResult = "draw";
                break;               
            } 
    }

    return(humanResult);
}

console.log(humanChoice);
console.log(computerChoice);
console.log(playRound(humanChoice, computerChoice));