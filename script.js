// JavaScript file for Number Guessing Game

let targetNumber, attempts, userName;

function startGame() {
  // Retrieve and validate user name
  userName = document.getElementById("userName").value.trim();
  if (userName !== "") {
    // Generate a random target number between 1 and 100
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    // Display a greeting and switch to the game section
    document.getElementById("hello").innerText ="Hello! " + userName;
    document.getElementById("nameFormContainer").style.display = "none";
    document.getElementById("gameSection").style.display = "block";
  } else {
    // Alert if the user name is not entered
    alert("Please enter your name.");
  }
}

function checkGuess() {
  // Retrieve and reset user's guess, increment attempts
  const userGuess = parseInt(document.getElementById("userGuess").value);
  document.getElementById("userGuess").value = '';
  attempts++;

  // Check if the guess is correct and provide feedback
  if (userGuess === targetNumber) {
    displayMessage(`Congratulations, ${userName}! You guessed the correct number in ${attempts} attempts!`, 'green');
  } else if (userGuess < targetNumber) {
    displayMessage(`${userName}, Too low! Try again.`, 'red');
  } else {
    displayMessage(`${userName}, Too high! Try again.`, 'red');
  }

  // Update attempts count
  document.getElementById("attempts").innerText = `Attempts: ${attempts}`;
}

function displayMessage(message, color) {
  // Display a colored message to the user
  document.getElementById("message").innerHTML = `<span style="color: ${color};">${message}</span>`;
}
