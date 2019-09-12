//Create an array of words
var wordGuesses = ["apple", "seattle", "washington", "soccer", "groceries", "television", "computer", "university", "work", "mountain"]
//Choose word randomly
var randomNumber = Math.floor(Math.random() * wordGuesses.length);
var chosenWord = randomNumber[wordGuesses];
console.log(chosenWord);
//Create underscores based on length of word
//Get users guess
//Check if guess is right
//If right, push to right array
//If wrong, push to wrong array