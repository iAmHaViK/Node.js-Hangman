// Word.js: Contains a constructor, 
// Word that depends on the Letter constructor. 
// This is used to create an object representing the current word 
// the user is attempting to guess. 
// That means the constructor should define:

// 1)An array of new Letter objects representing the letters of the underlying word
// 2)A function that returns a string representing the word. 
// This should call the function on each letter 
// object (the first function defined in Letter.js) that displays the character or 
// an underscore and concatenate those together.
// 3)A function that takes a character as an argument and calls 
// the guess function on each letter object (the second function defined in Letter.js)

var letter = require('./letter.js');

function Word(target) {
	this.target = target;
	this.lets = [];
	this.found = false;

	this.getLet = function() {
		for (var i=0; i < this.target.length; i++) {
			this.lets.push( new letter(this.target[i]));
			// console.log(this.lets);
		}
	};

	this.findWord = function() {
		this.found = this.lets.every(function(currLett) {
			return currLett.appear;
		});
		return this.found;
	};

	this.checkLetter = function(guessLet) {
		var toReturn = 0;

		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].charac == guessLet){
				this.lets[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

	this.wordRender = function() {
		var string = '';
		for (var i=0; i < this.lets.length; i++){
			string += this.lets[i].letterRender();
		}
		return string;
	};

}

module.exports = Word;