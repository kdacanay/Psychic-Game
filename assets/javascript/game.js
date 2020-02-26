//these will be the letter choices for computer and user use
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//this is to set/reset counters 
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//1st computer to guess from random letter
var compGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

function playersGuessesLeft() {
    document.querySelector("#guessesLeft").innerHtml = "Number of Player's Guesses Left: " + guessesLeft;
};

function playersGuessedLetters() {
    document.querySelector("#guessedLetters").innerHtml = "Player's Guesses So Far: " + guessedLetters.join('');
};

playersGuessesLeft();
//reset game after win/9 losses
var reset = function () {
    guessesLeft = 9;
    guessedLetters = [];
    var compGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
}

//player guesses letter, presses key and releases to enter key
document.onkeyup = function (event) {
    var playersGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessesLeft--;
    guessedLetters.push(playersGuess);
    playersGuessesLeft();
    playersGuessedLetters();

    if (playersGuess === compGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        reset();
    } else if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        reset();
    }


};