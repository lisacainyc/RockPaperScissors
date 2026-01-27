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
            result = "scissor";
            break;
    }
    return result;
}

console.log(getComputerChoice());

function getHumanChoice(){
    let input = prompt("Enter rock, paper, or scissors");
    return input;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;