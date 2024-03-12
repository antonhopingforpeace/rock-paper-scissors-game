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

function playRound(playerSelection, computerSelection){
    
    timesPlayed+=1;

    console.log(timesPlayed);

    if(timesPlayed>=6){
        newDiv.textContent="GAME OVER";

        let winner = document.createElement("h1")

        winner.textContent=showWinner(playerScore,computerScore);
        
        body.appendChild(winner);
        return
    }

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
    if(timesPlayed<5)
    round.textContent = "Round: " + (timesPlayed+1);
    else
    round.textContent = "Round: 5"
    // else{
    //     newDiv.textContent="Your input was wrong, give a answer between ROCK, PAPER and SCISSORS";
    //     //return -2;
    // }

}

// function showResult(player1,player2){
//     console.log("Player score:"+player1);
//     console.log("Computer score:"+player2);
// }

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

// function playGame(){

//     let computerScore=0;
//     let playerScore=0;

//     for(let round=1; round<=5; round++){

//         const computerSelection = getComputerChoice();
//         let playerSelection = prompt("Choose between rock,paper,scissors:");
//         let result = playRound(playerSelection,computerSelection);
        
//         if(result===1){
//             playerScore++;
//         }
//         else if(result===-1){
//             computerScore++;
//         }
//         else if(result===0){
//             computerScore++;
//             playerScore++;
//         }
//         else{
            
//             while(result===-2){
//                 let playerSelection = prompt("Choose between rock,paper,scissors:");
//                 result = playRound(playerSelection,computerSelection);
//                 if(result===1){
//                     playerScore++;
//                 }
//                 else if(result===-1){
//                     computerScore++;
//                 }
//                 else if(result===0){
//                     computerScore++;
//                     playerScore++;
//                 }   
//             }
//         }
        
//         console.log("ROUND"+round+":");
//         showResult(playerScore,computerScore);
//     }

//     showWinner(playerScore,computerScore);
// }

// playGame();

let buttonRock = document.getElementById("rock");
let buttonPaper = document.getElementById("paper");
let buttonScissors = document.getElementById("scissors");

let body = document.querySelector("body");

let results = document.querySelector(".results");
let newDiv = document.createElement("div");

let player = document.querySelector(".player");
let computer = document.querySelector(".computer");
let round = document.querySelector(".round");

let computerScore=0;
let playerScore=0;
let timesPlayed=0;

buttonRock.addEventListener("click", ()=> {
    playRound("rock",getComputerChoice())});
buttonPaper.addEventListener("click", ()=> {
    playRound("paper",getComputerChoice())});
buttonScissors.addEventListener("click", ()=>{
    playRound("scissors",getComputerChoice())});

player.textContent = "Player: "+playerScore;
computer.textContent = "Computer: "+computerScore;
round.textContent = "Round: " + (timesPlayed+1);

body.insertBefore(newDiv,results);

