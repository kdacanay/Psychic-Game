//Assignment Rules:
//Computer randomly picks a letter from array, user has to guess which letter the cpu chose.

//this is the array of letter choices for computer and user to pick from
let letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//counters displayed on html, will reset when guesses left reach 0, or guessed correct letter
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];

//used to see what letter/key the user types   
document.onkeyup= function(event) {
//computer randomly picks letter from letterChoices array to be matched to user guess
function cpuGuess(letterChoices) {
    return letterChoices[Math.floor(Math.random() * letterChoices.length)];
}
var userGuess = event.key;

        //Pushes userGuess to wongGuesses array.

        
            //Resets the game.
            var reset = function() {
                    guessesLeft = 10;
                    guessedLetters = [];
                    cpuGuess();
            };
//if user guesses incorrectly, this takes wrong letter and "pushes" letter to guessedLetters
var addGuess = function() {
    guessedLetters.push(
    userGuess)
};	
            //if else statements to control flow of program, alerts user if letter guessed correctly, or alerts user if loss
            if (userGuess === cpuGuess) {
                alert("Can you really read my mind?? Prove it again!")
                wins++;
                reset(); 
            } else {
            guessesLeft--;
            addGuess();
            if (guessesLeft === 0) {
            alert("I knew you weren't psychic.  It's okay.  Try again!")
                losses++;
                reset();
                }
            };
        
            //this tracks stats and updates the html
            var html =
              "<p>Wins: " + wins + "</p>" +
              "<p>Losses: " + losses + "</p>" +
              "<p>Guesses Left: " + guessesLeft + "</p>" +
              "<p>Player Guesses So Far: " + guessedLetters + "</p>";
        
            document.querySelector("#gameplay").innerHTML = html;
        
        };