function computerPlay(){
    const wordList= ["Rock","Paper","Scissors"]
    
    const computerTurn = wordList[Math.floor(Math.random() *wordList.length)];

    return computerTurn
}

console.log(computerPlay())