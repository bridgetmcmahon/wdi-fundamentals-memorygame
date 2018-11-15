var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function() {
		//check whether cards match
		if (cardsInPlay[0] === cardsInPlay[1]){
			setTimeout(winner, 100);
			function winner() {
				alert("You found a match!");
			}
		} else {
			setTimeout(tryAgain, 100);
			function tryAgain() {
				alert("Sorry, try again");
			}
		}
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}

var createBoard = function() {
	//loop through cards
	for (var i = 0; i < cards.length; i++) {
		//create image element
		var cardElement = document.createElement('img');
		//set the image source
		cardElement.setAttribute('src', "images/back.png");
		//set the image data-id to be the index of the card
		cardElement.setAttribute('data-id', i);
		//flip card when card is clicked on
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();
