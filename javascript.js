


function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    let x = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 


if (x == 1) {
   return "rock";
}
else if (x == 2)   {
   return "paper";
}
else {
    return "scissors";
}
}

function getHumanChoice(){

    const player = prompt("choose Rock, Paper, or Scissors.").toLowerCase();
    if (player == "rock" || player == "paper" || player == "scissors") {
        return player;
    }

    else {
        alert("please enter a valid answer: rock, paper, or scissors.")
        getHumanChoice();
    }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
   
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if(humanChoice == computerChoice) {
        return alert("Draw");
    }
    else if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice =="paper" && computerChoice == "rock"){
        humanScore++;
        return alert("You picked " +humanChoice +" and WON! Computer picked " + computerChoice + "!");
        
    }
    else {
        computerScore++;
        return alert("You picked " +humanChoice +" and LOST! Computer picked " + computerChoice + "!");
        
    }
}

function playGame() {
    for(let i = 0; i < 5;i++){
        playRound();
    }
    if(humanScore > computerScore) {
        alert("Congratulations! You win! Score: " + humanScore + " - " + computerScore);
    }
    else if  (humanScore <  computerScore) {
        alert("Better luck next time, you lose... Score: " + humanScore + " - " + computerScore);
    }
    else {
        alert("It's a Draw! Score" + computerScore + " - " + humanScore);
    }
}

playGame();


    
