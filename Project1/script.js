function getRandomInt(Max){
    return Math.floor(Math.random() * Max);
}

let randGen = getRandomInt(3)

function getHumanChoice(){
    let choice = prompt("What choice do you want to pick ")
    choice = choice.toLowerCase()
    let choiceInt = 0 

    if (choice == "rock"){
        choiceInt = 0
    } else if (choice == "paper"){
        choiceInt = 1
    } else{
        choiceInt = 2
    }

    return choiceInt
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    const result = document.createElement("h1")
    const playerScore = document.createElement("h3")
    const robotScore = document.createElement("h3")
    const div = document.createElement("div")
    const winner = document.createElement("h1")

    div.appendChild(result)
    div.appendChild(playerScore)
    div.appendChild(robotScore)

    document.body.appendChild(div)
    document.body.appendChild(winner)
    
    if (humanChoice === 1 && computerChoice === 0){
        result.textContent = "Human wins"
        humanScore++
        playerScore.textContent = `Human score is ${humanScore}`
        robotScore.textContent = `Computer score is ${computerScore}`
    } else if (humanChoice === 0 && computerChoice === 1){
        result.textContent = "Computer wins"
        computerScore++
        playerScore.textContent = `Human score is ${humanScore}`
        robotScore.textContent = `Computer score is ${computerScore}`
    } else if (humanChoice === 1 && computerChoice === 2){
        result.textContent = "Computer wins"
        computerScore++
        playerScore.textContent = `Human score is ${humanScore}`
        robotScore.textContent = `Computer score is ${computerScore}`
    } else if (humanChoice === 2 && computerChoice === 1){
        result.textContent = "Human wins"
        humanScore++
        playerScore.textContent = `Human score is ${humanScore}`
        robotScore.textContent = `Computer score is ${computerScore}`
    } else if (humanChoice === 0 && computerChoice === 2){
        result.textContent = "Human wins"
        humanScore++
        playerScore.textContent = `Human score is ${humanScore}`
        robotScore.textContent = `Computer score is ${computerScore}`
    } else if (humanChoice === 2 && computerChoice === 0){
        result.textContent = "Computer wins"
        computerScore++
        playerScore.textContent = `Human score is ${humanScore}`
        robotScore.textContent = `Computer score is ${computerScore}`
    } else{
        result.textContent = "Its a draw"
        playerScore.textContent = `Human score is ${humanScore}`
        robotScore.textContent = `Computer score is ${computerScore}`
    }

    if (humanScore === 5){
        winner.textContent = "Human won"
    } else if (computerScore === 5){
        winner.textContent = "Computer won"
    }

}


const button1 = document.createElement("button")
const button2 = document.createElement("button")
const button3 = document.createElement("button")

button1.addEventListener("click", () =>{
    playRound(getHumanChoice(), randGen)
})

button2.addEventListener("click", () =>{
    playRound(getHumanChoice(), randGen)
})

button3.addEventListener("click", () =>{
    playRound(getHumanChoice(), randGen)
})

document.body.appendChild(button1)
document.body.appendChild(button2)
document.body.appendChild(button3)



