
const wordList= ["Rock","Paper","Scissors"]
let userWins = 0
let computerWins = 0
let tieCounter

function computerPlay(){
    const computerChoise = wordList[Math.floor(Math.random() *wordList.length)];
    return computerChoise
}

function userPlay(){
    const userChoise = window.prompt("0 - Rock \n1 - Paper \n2 -Scissors \nPlease pick a number from 0-2:");
    return wordList[userChoise]
}

function checkwinner(userSelection, computerSelection){
    if (userSelection == computerSelection){
        tieCounter ++ 
    } else if (((userSelection ="Rock") && (computerSelection = "paper")) || ((userSelection ="Paper") && (computerSelection = "Scissors"))|| ((userSelection ="Scissors") && (computerSelection = "Rock"))){
        computerWins ++
    } else {
        userWins ++ 
    }
   

}

function singleRound(){

    const userSelection = (userPlay(wordList))
    const computerSelection = (computerPlay(wordList))
    console.log ("The computer played " + computerSelection + "\nThe user played " + userSelection)
    checkwinner(userSelection,computerSelection)

}

