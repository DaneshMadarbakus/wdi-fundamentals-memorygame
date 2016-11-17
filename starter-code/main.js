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

/*var gameBoard = document.getElementById('game-board');
var createCards = function(y) {
	for (var x = 0; x < y; x++) {
	var newCard = document.createElement('div');
	newCard.className = 'card';
	gameBoard.appendChild(newCard); 
	}
}
createCards(4) */

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var board = document.getElementById('game-board');
var createBoard = function createBoard() {
	for (var i = 0; i < cards.length; i++){
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);
	board.appendChild(cardElement);
	board.appendChild(cardElement);
	}
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>";
	}
	else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>";
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
	  alert("Sorry, try again.");
	}
}

createBoard();








