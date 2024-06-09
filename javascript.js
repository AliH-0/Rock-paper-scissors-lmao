


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



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
   
    computerChoice = getComputerChoice();
    if(humanChoice == computerChoice) {

        document.getElementById("Result").textContent = "Draw!";
    }
    else if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice =="paper" && computerChoice == "rock"){
        humanScore++;
        document.getElementById("humanScore").textContent = humanScore;
        document.getElementById("Result").textContent = "You picked " + humanChoice +" and WON! Computer picked " + computerChoice + "!";
        AnnounceWinner();
        
    }
    else {
        computerScore++;
        document.getElementById("computerScore").textContent = computerScore;
        document.getElementById("Result").textContent = "You picked "  + humanChoice +" and LOST! Computer picked " + computerChoice + "!";
        AnnounceWinner();
        
    }


}

function AnnounceWinner() {
    if(computerScore >= 5) {
        document.getElementById("Result").textContent = "You Lose! Game will reset.";
        document.getElementById("humanScore").textContent = '0';
        document.getElementById("computerScore").textContent = '0';
        humanScore = 0;
        computerScore = 0;
    }
    else if (humanScore >= 5) {
        document.getElementById("Result").textContent = "You win! Game will reset.";
        document.getElementById("humanScore").textContent = '0';
        document.getElementById("computerScore").textContent = '0';
        humanScore = 0;
        computerScore = 0;
    }
    else {
        return null;
    }
}


document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));



    
