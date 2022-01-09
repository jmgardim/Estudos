let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard] //array - ordered list og itens
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame()
}


 
function renderGame() {
  cardsEl.textContent = "Cards:  " 
  // Create a for loop that renders out all the cards instead of just two
   for ( let i = 0; i < cards.length; i++ ) {
     cardsEl.textContent += cards[i] + " "
   }
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "you're out of the game!";
    isAlive = false;
  }
    
    messageEl.textContent = message
}


function newCard() {
    let card = 6
    sum += card
    renderGame()
    
}

