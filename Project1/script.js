function getRandomInt(Max){
    return Math.floor(Math.random() * Max);
}

let randGen = getRandomInt(3)

function getComputerChoice(options){
    if (options == 0){
        console.log("Rock")
    } else if (options == 1) {
        console.log("Paper")
    } else if (options == 2) {
        console.log("Scissors")
    }

    return options
}

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
    
    if (humanChoice === 1 && computerChoice === 0){
        console.log("Human wins")
        humanScore++
    } else if (humanChoice === 0 && computerChoice === 1){
        console.log("Computer wins")
        computerScore++
    } else if (humanChoice === 1 && computerChoice === 2){
        console.log("Computer wins")
        computerScore++
    } else if (humanChoice === 2 && computerChoice === 1){
        console.log("Human wins")
        humanScore++
    } else if (humanChoice === 0 && computerChoice === 2){
        console.log("Human wins")
        humanScore++
    } else if (humanChoice === 2 && computerChoice === 0){
        console.log("Computer wins")
        computerScore++
    } else{
        console.log("Its a draw")
    }

}


function playGame(){
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice(randGen)
    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice(randGen)
    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice(randGen)
    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice(randGen)
    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice(randGen)
    playRound(humanSelection, computerSelection)

    console.log(humanScore)
    console.log(computerScore)
}

playGame()

