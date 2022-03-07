
const wordList= ["Rock","Paper","Scissors"]

function computerPlay(){
    const computerChoise = wordList[Math.floor(Math.random() *wordList.length)];
    return computerChoise
}

function userPlay(){
    const userChoise = window.prompt("0 - Rock \n1 - Paper \n2 -Scissors \nPlease pick a number from 0-2:");
    return wordList[userChoise]
}

function singleRound(){

    const playerSelection = (userPlay(wordList))
    const computerSelection = (computerPlay(wordList))

    console.log(playerSelection)
    console.log(computerSelection)
}

