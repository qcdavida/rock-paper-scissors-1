
const wordList= ["Rock","Paper","Scissors"]
let userWins = 0
let computerWins = 0

function computerPlay(){
    const computerChoise = wordList[Math.floor(Math.random() *wordList.length)];
    return computerChoise
}

function userPlay(){
    let keepGoing = true  
    while(keepGoing){
        const userChoise = parseInt(window.prompt("0 - Rock \n1 - Paper \n2 -Scissors \nPlease pick a number from 0-2:"));
        if (userChoise<0 || userChoise>2 || isNaN(userChoise)){
            keepGoing = true
        }else {
            return wordList[userChoise]
            keepGoing = false
        }
}
}

function checkWinner(userSelection, computerSelection){

    if(computerSelection==userSelection){
        return "It's a tie"
    }else if (
        (userSelection =="Rock") && (computerSelection == "Paper")||
        ((userSelection =="Paper") && (computerSelection == "Scissors"))||
        ((userSelection =="Scissors") && (computerSelection == "Rock"))
         ){
        computerWins ++
        return "Computer wins!" 
    }else{
        userWins++
        return"User Wins!"
    }

}

function singleRound(){
    const userSelection = (userPlay(wordList))
    const computerSelection = (computerPlay(wordList))
    console.log ("The computer played " + computerSelection + "\nThe user played " + userSelection)
    console.log(checkWinner(userSelection,computerSelection))
}

function game(){
    for (let i=0; i<5; i++){
        singleRound()

    }
    if (userWins==computerWins){
        console.log("It's a Tie Game!")

    } else if (userWins>computerWins){
        console.log("The User Won The Game!")
        
    } else {
        console.log("The Computer Won The Game!")
    }
}
game()
