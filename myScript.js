
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

    // update texts
    if (result === "win") {
        p_score_display.textContent = ++nPlayerWins
    } else if (result == "lose") {
        comp_score_display.textContent = ++nComputerWins
    }
    round_display.textContent = ++round

    // update images
    p_img.setAttribute('src', move_img_url.get(playerSelection))
    if (playerSelection === 'paper' || playerSelection === 'scissors')
        p_img.style.transform = 'scaleX(-1)';
    else
        p_img.style.transform = null;

    c_img.setAttribute('src', move_img_url.get(computerSelection))
    c_img.style.transform = (computerSelection === 'rock') ? 'scaleX(-1)' : null;

    if (nPlayerWins == 5 || nComputerWins == 5) {
        endGame()
    }


}

function endGame() {

    const finishing_text = document.createElement('p')

    finishing_text.textContent = nPlayerWins > nComputerWins ? "Player Wins!"
        : nPlayerWins < nComputerWins ? "Computer Wins"
            : "Tie Game";

    finishing_text.style.fontSize = '40px';
    inputs.replaceChildren(finishing_text, start_button)
    inputs.setAttribute('style', 'justify-content: space-around;')
}

function startGame() {
    start_button.remove()
    inputs.replaceChildren(...choices)
    inputs.setAttribute('style', 'justify-content: space-between')

    nPlayerWins = nComputerWins = 0
    round = 1
    p_score_display.textContent = comp_score_display.textContent = round_display.textContent = 0
}

const choices = document.querySelectorAll('.game_move');
choices.forEach((choice) => {
    console.log(choice.id)
    choice.addEventListener('click', (e) => playRound(choice.id))
})

let nPlayerWins = 0
let nComputerWins = 0
let round = 1

const p_score_display = document.querySelector('#p_score_display')
const comp_score_display = document.querySelector('#comp_score_display')
const round_display = document.querySelector('#round_number')

const start_button = document.createElement('button')
start_button.addEventListener('click', () => startGame())
start_button.style.cssText = `
height: 100px; 
width: 200px;
font-size: 30px;
background-color: #fefae0;
`;
start_button.textContent = "Start Game"

const inputs = document.querySelector('#inputs')



const p_img = document.querySelector('#p_img')
const c_img = document.querySelector('#c_img')
const move_img_url = new Map([
    ['rock', './assets/rock.png'],
    ['paper', './assets/paper.png'],
    ['scissors', './assets/scissors.png']])


