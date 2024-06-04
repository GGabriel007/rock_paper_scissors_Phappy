document.addEventListener('DOMContentLoaded', () => {
  let pointsForPlayer = 0;
  let pointsForComputer = 0;

  function computerChoice() {
      const pcChoice = Math.floor(Math.random() * 3);
      let finalMove;
      if (pcChoice === 0) {
          finalMove = "rock";
      } else if (pcChoice === 1) {
          finalMove = "paper";
      } else {
          finalMove = "scissors";
      }
      return finalMove;
  }

  function playRound(playerSelection) {
      const computerOption = computerChoice();
      const resultDiv = document.getElementById('result');
      const scoreDiv = document.getElementById('score');
      
      let resultMessage;
      if (playerSelection === computerOption) {
          resultMessage = `You chose ${playerSelection} and the Computer chose ${computerOption} as well. It's a tie!`;
      } else if (playerSelection === "rock") {
          if (computerOption === "scissors") {
              pointsForPlayer++;
              resultMessage = "Rock smashes scissors! You win!";
          } else {
              pointsForComputer++;
              resultMessage = "Paper covers rock! You lose.";
          }
      } else if (playerSelection === "paper") {
          if (computerOption === "rock") {
              pointsForPlayer++;
              resultMessage = "Paper covers rock! You win!";
          } else {
              pointsForComputer++;
              resultMessage = "Scissors cuts paper! You lose.";
          }
      } else if (playerSelection === "scissors") {
          if (computerOption === "paper") {
              pointsForPlayer++;
              resultMessage = "Scissors cuts paper! You win!";
          } else {
              pointsForComputer++;
              resultMessage = "Rock smashes scissors! You lose.";
          }
      }

      resultDiv.textContent = resultMessage;
      scoreDiv.textContent = `Computer: ${pointsForComputer} Player: ${pointsForPlayer}`;

      if (pointsForPlayer === 5 || pointsForComputer === 5) {
          let winnerMessage;
          if (pointsForPlayer > pointsForComputer) {
              winnerMessage = "Congratulations! You won the game!";
          } else {
              winnerMessage = "The computer won the game. Better luck next time!";
          }
          resultDiv.textContent = winnerMessage;
          pointsForPlayer = 0;
          pointsForComputer = 0;
          scoreDiv.textContent = `Computer: ${pointsForComputer} Player: ${pointsForPlayer}`;
      }
  }

  document.getElementById('rock').addEventListener('click', () => playRound('rock'));
  document.getElementById('paper').addEventListener('click', () => playRound('paper'));
  document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
});