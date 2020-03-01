//list of variables to be used in Psychic Game
//array of letters for user and computer to pick from

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//variables for game display
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//computer picks from computerChoices array to begin game
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// logs the answer to console, answer is null at beginning of game, updates w/answer
var updateLetterToGuess = function () {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
  console.log(letterToGuess);
};

//event when user presses letter for guess, pushes to userGuess, runs update functions
//also if/else if for gameplay, calls reset function if guesses reach 0, or if guess correct
document.onkeyup = function (event) {
  guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();
  //if guess is equal to answer, player is alerted and reset function is called
  if (guessesLeft > 0) {
    if (userGuess == letterToGuess) {
      wins++;
      document.getElementById('wins').innerHTML = "Wins: " + wins;
      alert("You guessed correctly!");
      reset();
    }
    //if guesses reach 0, player is alerted, reset function called
  } else if (guessesLeft == 0) {
    losses++;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    alert("Out of guesses. Try again!");
    reset();
  }
};

//functions used to update display
var updateGuessesLeft = function () {
  document.getElementById('guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateGuessesSoFar = function () {
  document.getElementById('guessedSoFar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// function resets guesses left and guessed letters array after being called
var reset = function () {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}
//call function to update letter to guess at start up
updateLetterToGuess();