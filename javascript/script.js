// var allWords =  ["jaguarshark", "oceanographer", "stevesie", "submarine", "documentary", "intern", "belafonte", "cody", "revenge", "pirates", "esteban"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var remainingWords = ["jaguarshark", "oceanographer", "stevesie", "submarine", "documentary", "intern", "belafonte", "cody", "revenge", "pirates", "esteban"];
var wordInPlay = 0;
var lettersToGuess = [];
var correctLetters = [];
var letterInPlay = document.getElementById("letterInPlay");
var wrongLettersTried = document.getElementById("wrongLettersTried");
var incorrectGuesses = 15;
	
// function for resetting the letter in play div
function reset () {
	document.getElementById("letterInPlay").innerHTML = "";
	incorrectGuesses = 15;
	document.getElementById("incorrectGuesses").textContent = incorrectGuesses;	
	wordInPlay = 0;
	remainingWords = ["jaguarshark", "oceanographer", "stevesie", "submarine", "documentary", "intern", "belafonte", "cody", "revenge", "pirates", "esteban"];
	correctLetters = [];
	newWord();
};

function newWord () {
	document.getElementById("wrongLettersTried").innerHTML = "";
	document.getElementById("letterInPlay").innerHTML = "";
	var i = Math.floor(Math.random() * remainingWords.length);
	wordInPlay = remainingWords[i];
	remainingWords.splice(i, 1);
	lettersToGuess = wordInPlay.split('');
	correctLetters = wordInPlay.split('');
	document.getElementById("incorrectGuesses").textContent = incorrectGuesses;
	for (j = 0; j < lettersToGuess.length; j++) {
		var newLetter = document.createElement("li");
		newLetter.innerHTML = lettersToGuess[j];
		letterInPlay.appendChild(newLetter);
		newLetter.setAttribute("class", "hidden");
	}
}



document.onkeyup =	function (event) {
	if (event.key === "Enter" && remainingWords.length < 1) {
		alert("You're all out of new words! Play again?")
		reset();
	}
	else if (event.key === "Enter") {
		newWord ();
	}
	else if (lettersToGuess.indexOf(event.key) !== -1 && lettersToGuess.length < 2 && remainingWords.length < 1) {
		alert("Nice work! But you're out of new words. Play again?")
		reset();
	}
	else if (lettersToGuess.indexOf(event.key) !== -1 && lettersToGuess.length < 2) {
		alert("Nice round! Try another word! Your chances will not reset!")
		newWord();
	}
	// returns an error, but runs fine.
	else if (lettersToGuess.indexOf(event.key) !== -1 && wordInPlay !== 0) {
// they will need to be restyled when correctly guessed. Need to account for the same letter appearing twice.
		for (x = 0; x < lettersToGuess.length; x++) {
			if (lettersToGuess[x] === event.key) {
				lettersToGuess.splice(x, 1);
				console.log(lettersToGuess);
				// show.setAttribute("class", "shown");
			}
		}
	}
	else if (incorrectGuesses < 1){
		alert("You lose. Try again?");
		reset();
	}
	else if (alphabet.indexOf(event.key) !== -1 && wordInPlay !== 0 && correctLetters.indexOf(event.key) === -1) {
		var newWrongLetter = document.createElement("span");
		newWrongLetter.innerHTML = event.key;
		wrongLettersTried.appendChild(newWrongLetter);
		newWrongLetter.setAttribute("class", "wrongLetter");
		incorrectGuesses--;
		document.getElementById("incorrectGuesses").textContent = incorrectGuesses;	
	}
}
