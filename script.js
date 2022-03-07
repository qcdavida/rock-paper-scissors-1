const wordList= ["Rock","Paper","Scissors"]

function computerPlay(wordList){
    const computerChoise = wordList[Math.floor(Math.random() *wordList.length)];
    return computerChoise
}

function userPlay(wordList){
    const userChoise = window.prompt("0 - Rock \n1 - Paper \n2 -Scissors \NPlease pick a number from 0-2:");
    return userChoise
}

