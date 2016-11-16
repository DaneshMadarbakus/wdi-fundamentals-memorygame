console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


/* if (cardOne === cardTwo) {
	alert('You found a match!');
}
else if (cardThree === cardFour) {
	alert('You found a match!');
}
else if (cardThree === cardOne) {
	alert('Sorry, try again.');
}
else if (cardThree === cardTwo) {
	alert('Sorry, try again.');
}
else if (cardFour === cardOne) {
	alert('Sorry, try again.');
}
else if (cardFour === cardTwo) {
	alert('Sorry, try again.');
} */

var gameBoard = document.getElementById('game-board');
var createCards = function(y) {
	for (var x = 0; x < y; x++) {
	var newCard = document.createElement('div');
	newCard.className = 'card';
	gameBoard.appendChild(newCard); 
	}
}
createCards(4) 
