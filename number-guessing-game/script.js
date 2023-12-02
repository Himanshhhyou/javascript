let targetNumber, attempts, userName;

    function startGame() {
      userName = document.getElementById("userName").value.trim();
      if (userName !== "") {
        targetNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;

        // Hide the name form and display the game section
        document.getElementById("hello").innerText = `Hello! ${userName}`;
        document.getElementById("nameFormContainer").style.display = "none";
        document.getElementById("gameSection").style.display = "block";
      } else {
        alert("Please enter your name.");
      }
    }

    function checkGuess() {
      const userGuess = parseInt(document.getElementById("userGuess").value);
      document.getElementById("userGuess").value = '';
      attempts++;

      if (userGuess === targetNumber) {
        displayMessage(`Congratulations, ${userName}! You guessed the correct number in ${attempts} attempts!`, 'green');
      } else if (userGuess < targetNumber) {
        displayMessage(`Too low! Try again.`, 'red');
      } else {
        displayMessage(`Too high! Try again.`, 'red');
      }

      document.getElementById("attempts").innerText = `Attempts: ${attempts}`;
    }

    function displayMessage(message, color) {
      document.getElementById("message").innerHTML = `<span style="color: ${color};">${message}</span>`;
    }
