//these will be the letter choices for computer and user use
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//counters 
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];

console.log(letterChoices);

document.onkeyup= function(event) {

    console.log(event);
    //determines which key was pressed.
    var userGuess = event.key;
    // randomly chooses a choice from the options array. This is the Computer's guess.
    function cpuGuess(letterChoices) {
         return letterChoices[Math.floor(Math.random() * letterChoices.length)];
    }

        //Pushes userGuess to wongGuesses array.
        var addGuess = function() {
            guessedLetters.push(
                userGuess
                )
            };	
        
            //Resets the game.
            var resetGame = function() {
                    guessesLeft = 10;
                    guessedLetters = [];
                    cpuGuess();
            };
        
            //Determines winning and losing and what happens
            if (userGuess === cpuGuess) {
                alert("You got it! You're out of this world!")
                wins++;
                resetGame(); 
            } else {
                guessesLeft--;
                addGuess();
                if (guessesLeft === 0) {
                    alert("Disappointing. Try again and prove me wrong.");
                    losses++;
                    resetGame();
                }
            };
        
            //Incorporating HTML
            var html =
              "<p>Wins: " + wins + "</p>" +
              "<p>Losses: " + losses + "</p>" +
              "<p>Guesses Left: " + guessesLeft + "</p>" +
              "<p>Player Guesses So Far: " + guessedLetters + "</p>";
        
            document.querySelector("#gameplay").innerHTML = html;
        
        };