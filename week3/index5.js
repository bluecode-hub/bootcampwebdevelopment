const choices=["rock","paper","scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
let playerScore=0;
let computerScore=0;
function playgame(playerchoice){
    const computerchoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerchoice===computerchoice){
        result="ITS A TIE!";
    }else{
        switch(playerchoice){
            case "rock":
                result=(computerchoice==="scissors")?"YOU WIN!":"YOU LOSE!";
                break;
             case "paper":
                result=(computerchoice==="rock")?"YOU WIN!":"YOU LOSE!";
                break;
             case "scissors":
                result=(computerchoice==="paper")?"YOU WIN!":"YOU LOSE!";
                break;
        }
    }
    playerDisplay.textContent=`PLAYER:${playerchoice}`;
    computerDisplay.textContent=`Computer:${computerchoice}`;
    resultDisplay.textContent=result;
    resultDisplay.classList.remove("greenText","redText");
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent=playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent=computerScore;
            break;
    }
}