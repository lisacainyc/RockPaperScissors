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

function playGame(){

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
console.log(roundCounter);

while (roundCounter < 5){
    
const computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

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

    if (humanResult === "win"){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
    } else if (humanResult === "lose") {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    } else if (humanResult === "draw") {
        console.log("It's a tie! Try again")
    }
}
    playRound(humanChoice, computerChoice);
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    roundCounter++;
}
}

playGame();