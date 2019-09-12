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

//Get users guess
document.addEventListener("keyup", function(event) {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        var correct = false;
        var tempWord = "";
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

        if (correct == false) { 
            if (wrongGuesses.includes(letter) == false) {
                wrongGuesses.push(letter);
                document.getElementById("wrongGuesses").innerHTML = wrongGuesses.toString();
                guessesLeft = guessesLeft - 1;
                document.getElementById("guessesLeft").innerHTML = guessesLeft;

            }
        }

        
}) 



//Check if guess is right

//If right, push to right array
//If wrong, push to wrong array