let userScore = 0;
let computerScore = 0;

    function playGame(userChoice) {
      const choices = ['rock', 'paper', 'scissors'];
      const computerChoice = choices[Math.floor(Math.random() * 3)];
      let result = "";
      if (userChoice === computerChoice) {
        result = `It's a Draw! You both chose ${userChoice}`;
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        result = `You Win! ${userChoice} beats ${computerChoice}`;
        userScore++;
      } else {
        result = `You Lose! ${computerChoice} beats ${userChoice}`;
        computerScore++;
      }

      document.getElementById('result').textContent = result;
      document.getElementById('user-score').textContent = userScore;
      document.getElementById('computer-score').textContent = computerScore;
    }