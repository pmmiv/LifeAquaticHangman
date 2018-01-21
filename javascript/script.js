var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var remainingWords = ["jaguarshark", "oceanographer", "stevesie", "submarine", "documentary", "intern", "belafonte", "cody", "revenge", "pirates", "esteban"];
var wordInPlay = 0;
var lettersToGuess = [];
var correctLetters = [];
var incorrectGuesses = 15;
var mistakes = document.getElementById("wrongLettersTried");
var wrongLettersTried = [];
	
// function for resetting the letter in play div
function reset () {
	document.getElementById("letterInPlay").innerHTML = "";
	incorrectGuesses = 15;
	document.getElementById("incorrectGuesses").textContent = incorrectGuesses;	
	wordInPlay = 0;
	remainingWords = ["jaguarshark", "oceanographer", "stevesie", "submarine", "documentary", "intern", "belafonte", "cody", "revenge", "pirates", "esteban"];
	correctLetters ;
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
		var newLetter = document.createElement("span");
		newLetter.innerHTML = ("_");
		letterInPlay.appendChild(newLetter);
		newLetter.setAttribute("id", ("letter" + j));
	};
	document.getElementById("message").innerHTML = " ";
	wrongLettersTried = [];
}


document.onkeyup =	function (event) {
	// request a new word, but all words have been exhausted.
	if (event.key === "Enter" && remainingWords.length < 1) {
		document.getElementById("message").innerHTML = "You're all out of new words. Press <strong>enter</strong> to play again!"
		remainingWords = 0;
	}
	else if (event.key === "Enter" && remainingWords === 0 || event.key === "Enter" && incorrectGuesses === -1) {
		reset();
	}
	// request a new word, and there are words remaining.
	else if (event.key === "Enter") {
		newWord ();
	}
	// a correct letter was guessed and there's a word in play
	else if (correctLetters.indexOf(event.key) !== -1 && wordInPlay !== 0) {
		for (x = 0; x < correctLetters.length; x++) {
			if (correctLetters[x] === event.key) {
				document.getElementById("letter" + x).innerHTML = correctLetters[x];}
		}
		for (l = 0; l < lettersToGuess.length; l++) {
			if (lettersToGuess[l] === event.key) {	
				lettersToGuess.splice(l, 1);}
		}
		if (lettersToGuess.length === 0 && remainingWords.length < 1) {
		document.getElementById("message").innerHTML = ("Nice work! But you're out of new words. Press <strong>enter</strong> again?");
		}
		else if (lettersToGuess.length === 0) {
		document.getElementById("message").innerHTML = ("Nice work! You figured out " + wordInPlay + "! Press <strong>enter</strong> to try another word! Your chances will not reset!");
		}
	}
	else if (incorrectGuesses < 1){
		document.getElementById("message").innerHTML = "You lose. Press enter to try again!";
			incorrectGuesses--
	}
	else if (alphabet.indexOf(event.key) !== -1 && wordInPlay !== 0 && correctLetters.indexOf(event.key) === -1) {
		if (wrongLettersTried.indexOf(event.key) === -1) {		
		var newWrongLetter = document.createElement("span");
		newWrongLetter.innerHTML = event.key;
		mistakes.appendChild(newWrongLetter);
		newWrongLetter.setAttribute("class", "wrongLetter");
		incorrectGuesses--;
		document.getElementById("incorrectGuesses").textContent = incorrectGuesses;
		wrongLettersTried.push(event.key);
		}
	}
}
