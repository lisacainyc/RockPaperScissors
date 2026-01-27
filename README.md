This is a project made for The Odin Project Foundations course.

Below is the pseudocode that I used to build this project.

Function getComputerChoice:

    SET result variable
    CALCULATE random integer between 0 and 2
    RETURN 0, 1, or 2
   
    SWITCH result:
    0: Set result to rock
    1: Set result to paper
    2: Set result to scissors
    END SWITCH
    
    RETURN result

Function getHumanChoice:
    DISPLAY prompt with message "Enter rock, paper, or scissors"
    RETURN the input

Function PlayGame:

SET humanScore to 0
SET robotScore to 0
SET roundCounter to 0

WHILE roundCounter is less than 5:

CALL getHumanChoice and set it to variable humanChoice
CALL computerChoice and set it to constant computerChoice

Function playRound(humanChoice, computerChoice):
    SET humanChoice to all lowercase
    SET humanResult variable


    IF humanChoice is rock:
        SWITCH computerChoice:
        rock: set humanResult to draw
        paper: set humanResult to lose
        scissor: setHumanResult to win

    IF humanChoice is paper:
        SWITCH computerChoice:
        rock: set humanResult to win
        paper: set humanResult to draw
        scissors: set humanResult to lose

    IF humanChoice is scissors:
        SWITCH computerChoice:
        rock: set humanResult to lose
        paper: set humanResult to win
        scissors: set humanResult to draw    

    IF humanResult is win:
        INCREMENT humanScore by 1
        DISPLAY message in console saying "You win! {humanChoice} beats {computerChoice}
    ELSE IF humanResult is lose:
        INCREMENT computerScore by 1
        DISPLAY message in console saying "You lose! {computerChoice} beats {humanChoice}
    ELSE IF humanResult is draw:
        DISPLAY message in console saying "IplayRound(humanChoice, computerChoice);t's a tie!"

CALL playRound
PRINT humanScore and computerScore
INCREMENT roundCounter by 1

CALL playGame