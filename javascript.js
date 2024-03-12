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

    const player1 = playerSelection.toLowerCase();
    const player2 = computerSelection.toLowerCase();

    if (player1===player2){
        console.log("Its a tie, you both brought "+player1);
        newDiv.textContent="Its a tie, you both brought "+player1;
        //return 0;
    }
    else if (player1 === "rock" && player2==="paper"){
        console.log("You Lose! Paper beats Rock");
        newDiv.textContent="You Lose! Paper beats Rock";
        //return -1;
    }
    else if (player1 === "rock" && player2==="scissors"){
        console.log("You Win! Rock beats Scissors");
        newDiv.textContent="You Win! Rock beats Scissors";
        //return 1;
    }
    else if (player1 === "paper" && player2==="scissors"){
        console.log("You Lose! Scissors beats Paper");
        newDiv.textContent="You Lose! Scissors beats Paper";
        //return -1;
    }
    else if (player1 === "paper" && player2==="rock"){
        console.log("You Win! Paper beats Rock");
        newDiv.textContent="You Win! Paper beats Rock";
        //return 1;
    }
    else if (player1 === "scissors" && player2==="paper"){
        console.log("You Win! Scissors beats Paper");
        newDiv.textContent="You Win! Scissors beats Paper";
        //return 1;
    }
    else if(player1 === "scissors" && player2==="rock"){
        console.log("You Lose! Rock beats Scissors");
        newDiv.textContent="You Lose! Rock beats Scissors";
        //return -1;
    }
    else{
        console.log("Your input was wrong, give a answer between ROCK, PAPER and SCISSORS")
        newDiv.textContent="Your input was wrong, give a answer between ROCK, PAPER and SCISSORS";
        //return -2;
    }

}

function showResult(player1,player2){
    console.log("Player score:"+player1);
    console.log("Computer score:"+player2);
}

function showWinner(player1,player2){
    if(player1>player2){
        console.log("You win, congratulations!!!");
    }
    else if(player2>player1){
        console.log("You lost from the computer, unlucky");
    }
    else{
        console.log("Not a bad game, but its a tie.")
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

let newDiv = document.createElement("div");



buttonRock.addEventListener("click", ()=> {
    playRound("rock",getComputerChoice())});
buttonPaper.addEventListener("click", ()=> {
    playRound("paper",getComputerChoice())});
buttonScissors.addEventListener("click", ()=>{
    playRound("scissors",getComputerChoice())});

body.appendChild(newDiv);

