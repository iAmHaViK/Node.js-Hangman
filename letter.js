// Letter.js: Contains a constructor, Letter. 
// This constructor should be able to either display an underlying character or 
// a blank placeholder (such as an underscore), depending on whether or not the 
// user has guessed the letter. That means the constructor should define:
// 1)A string value to store the underlying character for the letter
// 2)A boolean value that stores whether that letter has been guessed yet
// 3)A function that returns the underlying character if the letter has been guessed, 
// or a placeholder (like an underscore) if the letter has not been guessed
// 4)A function that takes a character as an argument and checks it against 
// the underlying character, updating the stored boolean value to true if it was 
// guessed correctly

//export the constructor
var letter = function(let){
	this.charac = let;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};

//export the constructor
module.exports = letter;