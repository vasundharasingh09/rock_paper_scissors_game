let userScore = 0 ;
let compScore= 0 ;

const choices= document.querySelectorAll(".choice") ;
const msg = document.querySelector("#msg") ;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw.") ;
    msg.innerText = "Game was draw. Play again." ;
    msg.style.backgroundColor = "#081b31" ;
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++ ;
        userScorePara.innerText = userScore ;
        console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green" ;
    }
    else{
        compScore++ ;
        compScorePara.innerText = compScore ;
        console.log("you lose");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}` ;
        msg.style.backgroundColor = "red" ;
    }
} 

const playGame=(userChoice) =>{
    console.log("user choice = ", userChoice) ;
    // Generate comp choice -> modular way of programming -> to do diff task using different small small functions
    const compChoice =  genCompChoice() ;
    console.log("comp choice = ", compChoice) ;

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true ;
        if(userChoice === "Rock"){
            // now comp can only choose bw scissors and paper
            userWin = compChoice === "Paper" ? false : true ;
        }
        else if(userChoice === "Paper"){
            // now comp can only choose bw scissors and rock
            userWin = compChoice === "Scissors" ? false : true ;
        }
        else{
            // comp -- rock,paper
            userWin = compChoice === "Rock" ? false : true ;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});