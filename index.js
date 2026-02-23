let humanChoice;
let buttons = document.querySelector('.buttons');
buttons.addEventListener('click', function(event){
   clicked = event.target;
   humanChoice = clicked.textContent;
   let computerChoice = getComputerChoice();
   playGame(humanChoice,computerChoice);
});

let resultsDiv = document.querySelector(".score");
let roundsDiv = document.querySelector(".rounds");
let winnerDiv = document.querySelector(".winner");

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
console.log(roundCounter);

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
};

function playGame(humanChoice, computerChoice){

playRound(humanChoice, computerChoice);

if (humanScore === 5){
    winnerDiv.textContent = ("Human wins!");
    roundCounter = 0;
} else if (computerScore === 5){
    winnerDiv.textContent = ("Computer wins!");
    roundCounter = 0;
}

roundsDiv.textContent = (`Human: ${humanScore}, Computer: ${computerScore}`);
roundCounter++;
};

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
        resultsDiv.textContent = (`You win! ${humanChoice} beats ${computerChoice}!`)
    } else if (humanResult === "lose") {
        computerScore++;
        resultsDiv.textContent = (`You lose! ${computerChoice} beats ${humanChoice}`)
    } else if (humanResult === "draw") {
        resultsDiv.textContent = ("It's a tie! Try again")
    }
};