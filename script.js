const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;


  // FOR USER-CHOICE
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id");
        console.log(`${userChoice} got clicked`);
        playGame(userChoice);
    });
});

    // GENERATING COMPUTER CHOICE
const genCompChoice = () => {
    let opt = ["Rock","Paper","Scissors"];
    let idx = Math.floor(Math.random()*3);
    return opt[idx];
};

    // GAME DRAW
const gameDraw = (compChoice) =>{
    console.log(`Game was a Draw. Both chosed ${compChoice}`);
    result.innerText = `Game was a Draw. Both chosed ${compChoice}`;
    result.style.backgroundColor = "#636162";
    userScorePara.style.color = "#636162";
    compScorePara.style.color = "#636162";
};

    // SHOW WINNER
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        console.log(`You Won! ${userChoice} beats ${compChoice}`);
        result.innerText = `You Won! ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "#31CB00";  // green
        userScorePara.innerText = userScore;
        userScorePara.style.color = "#31CB00"; // green
        compScorePara.style.color = "#EF271B";  //red 
    }
    else{
        compScore++;
        console.log(`You Lose, ${compChoice} beats ${userChoice}`);
        result.innerText = `You Lose. ${compChoice} beats ${userChoice}`;
        result.style.backgroundColor = "#EF271B"; // red
        compScorePara.innerText = compScore;
        compScorePara.style.color = "#31CB00";  // green 
        userScorePara.style.color = "#EF271B"; // red 
    }
}

   // MAIN GAME PLAY
const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    console.log(`Bot chose ${compChoice}`);

    let userWin;
    if(userChoice === compChoice){
        gameDraw(compChoice);
    }
    else{
        if(userChoice === "Rock"){
            userWin = compChoice==="Scissors" ? true : false;
        }

        else if(userChoice === "Paper"){
            userWin = compChoice==="Rock" ? true : false;
        }

        else if(userChoice === "Scissors"){
            userWin = compChoice==="Paper" ? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};