//  The Game Rules =>
// 1. Player must guess a number between min and max
// 2. Player gets a certain amount of guesses
// 3. Notify player of guesses remining
// 4. Notify the player of the correct answer if loose
// 5. Let player choose to play again

// Game values

let min = 1,
  max = 10,
  wainingNumber = winingRandomNumber(),
  tryLeft = 3;

// Select the UI

const game = document.querySelector("#game");
const minNumber = document.querySelector(".min-num");
const maxNumber = document.querySelector(".max-num");
const input = document.querySelector("#guess-input");
const btn = document.querySelector("#guess-btn");
const message = document.querySelector(".message");

// Define the UI min and max

max = maxNumber.textContent;
min = minNumber.textContent;

// Listen to the User if it is play again

game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen to the User to play

btn.addEventListener("click", function () {
  let guess = parseInt(input.value);
  // Validation

  // We use NaN becouse if you enter an empty value as guess will get a NaN
  if (isNaN(guess) || guess < 1 || guess > 10) {
    message.textContent = `Please Enter a Number between ${min} and ${max}`;
    message.style.color = "red";
  }

  //  Check the wining number

  if (guess === wainingNumber) {
    // Disabled the input
    input.disabled = true;

    // Change the border color for the winner
    input.style.borderColor = "green";

    //  Set a messege

    message.textContent = `${wainingNumber} is correct! , You Win`;
    message.style.color = "green";

    // Play again

    btn.value = "Play Again";
    btn.className += "play-again";
  } else {
    tryLeft -= 1;

    if (tryLeft === 0) {
      // Game Over - Lost

      // Disable the input and the button so the use coudn't do anthing
      input.disabled = true;

      // Change the border color for the winner
      input.style.borderColor = "red";

      //  Set a messege
      message.textContent = `${guess} is not Correct, You lost ,the correct answer was ${wainingNumber}`;
      message.style.color = "red";

      // Play again

      btn.value = "Play Again";
      btn.className += "play-again"; //we use += just incase there is another className
    } else {
      // Continue

      // Set the message
      message.textContent = `${guess} is not correct, You have ${tryLeft} tries left`;
      message.style.color = "red";

      // Clear the input
      input.value = "";
    }
  }
});

// Wining number

function winingRandomNumber() {
  let x = Math.floor(Math.random() * 10 + 1);
  return x;
}
