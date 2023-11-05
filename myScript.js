function getComputerChoice() {
    const validMoves = ['rock','paper','scissors']
    moveIndex = Math.floor(Math.random() * validMoves.length) 

    return validMoves[moveIndex]
}

function returnResult(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase() 

    if (playerSelection === computerSelection)  {
        console.log(`You Tie! Both parties played ${capitalizeFirstLetter(playerSelection)}`)
        return "tie"
    }
    else if ((playerSelection === "rock" && computerSelection === "paper") ||
             (playerSelection === "paper" && computerSelection === "scissors") ||
             (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        console.log(`You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`)
        return "win"
    }
    else {
        console.log(`You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`)
        return "lose"
    }

}


function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
}

function game(){

    let nPlayerWins = 0
    let nTies = 0
    let nComputerWins = 0

    for (let i = 0; i<5; i++){
        let computerSelection = getComputerChoice()
        result = returnResult(prompt("Submit a move"),computerSelection)
        if (result === "win")
            nPlayerWins++;
        else if (result == "tie")
            nTies++;
        else if (result == "lose")
            nComputerWins++;
    }

    return `Wins: ${nPlayerWins} | Ties: ${nTies} | Losses: ${nComputerWins}`
}

console.log(game())
