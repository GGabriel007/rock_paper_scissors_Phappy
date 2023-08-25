

function game(){
    // your code here!
    let pointsForPlayer = 0;
    let pointsForComputer = 0;

    function computerChoice(){
      const pcChoice = Math.floor(Math.random() * 3);
      let finalMove;  
      if (pcChoice === 0){
        finalMove = "rock";
      }else if (pcChoice === 1){
        finalMove = "paper";
      } else {
        finalMove = "scissors";
      }
      return finalMove;
      }

      function userSelection(){
        condition = true; 
        while (condition) {
          optionUser = prompt("Enter your option", "Rock, Paper or Scissors");
          if ((optionUser.toLowerCase() == "rock") || (optionUser.toLowerCase() == "paper") || (optionUser.toLowerCase() == "scissors")){
            return optionUser.toLowerCase();} 
          else {
           console.log("Please enter a valid answer.");}  
        }
      }

      function round(getComputerChoice, playerSelection){
        if (playerSelection == getComputerChoice){
          return"You choose " + playerSelection + " and the Computer Choose " + getComputerChoice + " as well. It's a tie!"; 
        } 
        else if (playerSelection == "rock"){
            if (getComputerChoice == "scissors"){
              pointsForPlayer++;
              return"Rock smashes scissors! You win!";
            }else {
              pointsForComputer++;
              return"Paper covers rock! you lose.";}
        } 
        else if (playerSelection == "paper"){
            if (getComputerChoice == "rock"){
              pointsForPlayer++;
              return"Paper cover Rock! You win!";
            }else {
              pointsForComputer++;
              return"Scissors cuts paper! You lose.";
            }
        }
        else if (playerSelection == "scissors"){
            if (getComputerChoice == "paper"){
              pointsForPlayer++;
              return"Scirssors cuts paper! You win!";
            }else {
              pointsForComputer++;
              return"Rock smashes scissors! You lose";
            }
        } 
      }
    while(true){  
      constant1 = true;
      while(constant1){

        const userChoice = userSelection();  
        const computerOption = computerChoice(); 
        console.log(round(computerOption, userChoice)); 
        console.log("Computer: " + pointsForComputer, "Player: " + pointsForPlayer);
        if (pointsForPlayer === 3 || pointsForComputer === 3){
          if (pointsForPlayer > pointsForComputer){
            console.log("You won! you beat the computer! ");
            constant1 = false;
          }else if (pointsForComputer > pointsForPlayer){
            console.log("Oh no you lost! The computer won :C ");
            constant1 = false;
          } 
        }
      } 
    const playAgain = confirm("Do you want to play again");
    if (!playAgain)
      break; 
    }
  }  
  game();
  

