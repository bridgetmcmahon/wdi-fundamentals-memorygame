var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("Sorry, try again");
		}
	}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	checkForMatch();
}

flipCard(0);
flipCard(2);

//OLD CODE FROM LAST ASSIGNMENT
	// var cardOne = cards[0];
	// cardsInPlay.push(cardOne);
	// console.log("User flipped " + cardOne);

	// var cardTwo = cards[1];
	// cardsInPlay.push(cardTwo);
	// console.log("User flipped " + cardTwo);