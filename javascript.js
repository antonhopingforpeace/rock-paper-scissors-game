function getComputerChoice(){

    const myNumber = Math.floor(Math.random()*3)+1;

    switch(myNumber){
        case 3:
            return "Rock";
        case 2:
            return "Paper";
        case 1:
            return "Scissors";
    }

}

function disableButtons(){
    buttonPaper.disabled= true;
    buttonRock.disabled=true;
    buttonScissors.disabled=true;
}

function showWinner(player1,player2){
    if(player1>player2){
        return "You win, congratulations!!!";
    }
    else if(player2>player1){
        return "You lost from the computer, unlucky";
    }
    else{
        return"Not a bad game, but its a tie.";
    }
}

function playRound(playerSelection, computerSelection){

    const player1 = playerSelection.toLowerCase();
    const player2 = computerSelection.toLowerCase();

    if (player1===player2){
        newDiv.textContent="Its a tie, you both brought "+player1;
    }
    else if (player1 === "rock" && player2==="paper"){
        newDiv.textContent="You Lose! Paper beats Rock";
        computerScore+=1;
    }
    else if (player1 === "rock" && player2==="scissors"){
        newDiv.textContent="You Win! Rock beats Scissors";
        playerScore+=1;
    }
    else if (player1 === "paper" && player2==="scissors"){
        newDiv.textContent="You Lose! Scissors beats Paper";
        computerScore+=1;
    }
    else if (player1 === "paper" && player2==="rock"){
        newDiv.textContent="You Win! Paper beats Rock";
        playerScore+=1;
    }
    else if (player1 === "scissors" && player2==="paper"){
        newDiv.textContent="You Win! Scissors beats Paper";
        playerScore+=1;
    }
    else if(player1 === "scissors" && player2==="rock"){
        newDiv.textContent="You Lose! Rock beats Scissors";
        computerScore+=1;
    }

    player.textContent = "Player: "+playerScore;
    computer.textContent = "Computer "+computerScore;

    if(playerScore===3||computerScore===3){
        newDiv.textContent="GAME OVER";

        let winner = document.createElement("h1")

        winner.textContent=showWinner(playerScore,computerScore);
        
        disableButtons();

        body.appendChild(winner);
        return
    }

}

let buttonRock = document.getElementById("rock");
let buttonPaper = document.getElementById("paper");
let buttonScissors = document.getElementById("scissors");

let body = document.querySelector("body");

let results = document.querySelector(".results");
let newDiv = document.createElement("div");

let player = document.querySelector(".player");
let computer = document.querySelector(".computer");

let computerScore=0;
let playerScore=0;

buttonRock.addEventListener("click", ()=> {
    playRound("rock",getComputerChoice())});
buttonPaper.addEventListener("click", ()=> {
    playRound("paper",getComputerChoice())});
buttonScissors.addEventListener("click", ()=>{
    playRound("scissors",getComputerChoice())});

player.textContent = "Player: "+playerScore;
computer.textContent = "Computer: "+computerScore;

body.insertBefore(newDiv,results);

