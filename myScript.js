function getComputerChoice() {
    const validMoves = ['rock', 'paper', 'scissors']
    moveIndex = Math.floor(Math.random() * validMoves.length)
    return validMoves[moveIndex]
}

function returnPlayerResult(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        console.log(`You Tie! Both parties played ${capitalizeFirstLetter(playerSelection)}`)
        return "tie"
    }
    else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        console.log(`You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`)
        return "lose"
    }
    else {
        console.log(`You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`)
        return "win"
    }

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function playRound(playerSelection) {

    let computerSelection = getComputerChoice()
    result = returnPlayerResult(playerSelection, computerSelection)

    if (result === "win") {
        p_score_display.textContent = ++nPlayerWins
    } else if (result == "lose") {
        comp_score_display.textContent = ++nComputerWins
    }

    round_display.textContent = ++round

    if (round >= 5) {
        endGame()
    }
}

function endGame() {
    // choices.forEach((choice) => {
    //     choice.remove()
    // })
    const finishing_text = document.createElement('p')
    
    finishing_text.textContent = nPlayerWins>nComputerWins ? "Player Wins!"
        : nPlayerWins<nComputerWins? "Computer Wins" 
        : "Tie Game";

    document.querySelector('#inputs').replaceChildren(finishing_text,start_button)
    start_button.addEventListener('click', () => startGame())
}

function startGame() {
    start_button.remove()
    document.querySelector('#inputs').replaceChildren(...choices)
    nPlayerWins = nComputerWins = round = 0
    p_score_display.textContent = comp_score_display.textContent = round_display.textContent = 0
}

const choices = document.querySelectorAll('.game_move');
choices.forEach((choice) => {
    console.log(choice.id)
    choice.addEventListener('click', () => playRound(choice.id))
})

let nPlayerWins = 0
let nComputerWins = 0
let round = 0

const p_score_display = document.querySelector('#p_score_display')
const comp_score_display = document.querySelector('#comp_score_display')
const round_display = document.querySelector('#round_number')

const start_button = document.createElement('button')
start_button.textContent = "Start Game"