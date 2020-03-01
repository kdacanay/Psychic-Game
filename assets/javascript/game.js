var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var wins = 0;
var losses = 0;
var guesses = 9;
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
var userGuessSoFar = [];
var winPoints = document.getElementById("wins");
var guessesLeft = document.getElementById("guessLeft");
var losePoints = document.getElementById("losses");
var guessSoFar = document.getElementById("guess-so-far");

function updateDisplays() {
  winPoints.textContent = wins;
  guessesLeft.textContent = guesses;
  losePoints.textContent = losses;
}

document.onkeyup = function(event) {

  var userGuess = event.key;
  userGuessSoFar.push(userGuess);
  guessSoFar.textContent = userGuessSoFar;

  if (userGuess == computerGuess) {

    wins++;
    guesses = 9
    userGuessSoFar = [];
    computerGuess = letters[Math.floor(Math.random() * letters.length)];

  } else {

    guesses--;

    if (guesses == 0) {
      losses++;
      userGuessSoFar = [];
      guesses = 9;
    }

  }

  updateDisplays();

}


updateDisplays();