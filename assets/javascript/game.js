//Create an array of words
var wordGuesses = ["apple", "seattle", "washington", "soccer", "groceries", "television", "computer", "university", "work", "mountain"];
//Choose word randomly
// var randomNumber = Math.floor(Math.random() * wordGuesses.length);
var chosenWord = wordGuesses[Math.floor(Math.random() * wordGuesses.length)];
console.log(chosenWord);

var underscore = "";
//Create underscores based on length of word
for (var i = 0; i < chosenWord.length; i++) {
    underscore = underscore + "_ ";
}

document.getElementById("wordPlaceholder").innerHTML = underscore;

var wrongGuesses = [];
var guessesLeft = 12;

//Create reset function that will set guessesLeft to 12, wrongGuesses to [], and give a new chosenWord




//Get users guess
document.addEventListener("keyup", function(event) {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        var correct = false;
        var tempWord = "";
        //checking to see if letter guess matches any letters in chosenWord
        for (var j = 0; j <chosenWord.length; j++) {
            if (letter == chosenWord[j]) {
                tempWord = tempWord + letter + " ";
                correct = true;
            }
            else {
                tempWord = tempWord + underscore[j * 2] + " ";
            }
        }
        underscore = tempWord;
        document.getElementById("wordPlaceholder").innerHTML = underscore;

        // *My attempt at creating a "You win" alert"
        console.log("underscore",underscore.replace(/ /g, ""));
        console.log("chosenWord",chosenWord);
        if (underscore.replace(/ /g, "") == chosenWord) {
            alert("You win!");
            console.log("You win");
            reset();
        }
        
        if (correct == false) { 
            if (wrongGuesses.includes(letter) == false) {
                wrongGuesses.push(letter);
                document.getElementById("wrongGuesses").innerHTML = wrongGuesses.toString();
                guessesLeft = guessesLeft - 1;
                document.getElementById("guessesLeft").innerHTML = guessesLeft;
                if (guessesLeft == 0) {
                    alert("You lose!");
                    reset();
                    // MY ATTEMPT AT CREATING A RESET FUNCTION //
                //     function reset() {
                //         wrongGuesses = [];
                //         guessesLeft = 12;
                //         chosenWord = wordGuesses[Math.floor(Math.random() * wordGuesses.length)];
                //         for (var i = 0; i < chosenWord.length; i++) {
                //             underscore = underscore + "_ ";
                //         }
                //         document.getElementById("wrongGuesses").innerHTML = wrongGuesses.toString();
                //         document.getElementById("guessesLeft").innerHTML = guessesLeft;
                //         document.getElementById("wordPlaceholder").innerHTML = underscore;
                //     }
                }
                
            }
        }

        
});

            function reset() {
                wrongGuesses = [];
                guessesLeft = 12;
                underscore = "";
                chosenWord = wordGuesses[Math.floor(Math.random() * wordGuesses.length)];
                for (var i = 0; i < chosenWord.length; i++) {
                    underscore = underscore + "_ ";
                }
                document.getElementById("wrongGuesses").innerHTML = wrongGuesses.toString();
                document.getElementById("guessesLeft").innerHTML = guessesLeft;
                document.getElementById("wordPlaceholder").innerHTML = underscore;
            }



//Check if guess is right

//If right, push to right array
//If wrong, push to wrong array

