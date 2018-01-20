var allWords =  ["jaguarshark", "oceanographer", "stevesie", "submarine", "documentary", "intern", "belafonte", "cody", "revenge", "pirates", "esteban"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var remainingWords = allWords;
var wordInPlay = 0;
var lettersToGuess = 0;
// var letterInPlay = document.getElementById("letterInPlay");
var letterInPlay = document.getElementById("letterInPlay");
console.log(letterInPlay);
var incorrectGuesses = 8;
	
document.onkeyup =	function (event) {
	if (event.key === "Enter") {
		var i = Math.floor(Math.random() * remainingWords.length);
		wordInPlay = remainingWords[i];
		remainingWords.splice(i, 1);
		lettersToGuess = wordInPlay.split('');
		// sleep(1000);

//will have to be changed to create an element for each letterToGuess
		// document.getElementById("wordInPlay").textContent = wordInPlay; 
		
		document.getElementById("incorrectGuesses").textContent = incorrectGuesses;
// this loop works, but it doesn't work in the js doc. I believe the issue is that the array lettersToGuess is being created before the word has been decided.
		for (j = 0; j < lettersToGuess.length; j++) {
			var newLetter = document.createElement("div");
			newLetter.innerHTML = lettersToGuess[j];
			letterInPlay.appendChild(newLetter);
		}
// once I figure out how to generate the letters I can style them to be invisible
	}
	// returns an error, but runs fine.
	else if (lettersToGuess.indexOf(event.key) !== -1) {
// they will need to be restyled when correctly guessed. Need to account for the same letter appearing twice.
		console.log(event.key);
// once all of the correct letters have been assigned tell the player they've won and disable guessing
	}
	else if (incorrectGuesses < 0){
		alert("You lose. Press enter to generate another word.");
	}
	else if (alphabet.indexOf(event.key) !== -1) {
		incorrectGuesses--;
		document.getElementById("incorrectGuesses").textContent = incorrectGuesses;		
	}
}


// # letters to be guessed in wordInPlay = 0, you win
