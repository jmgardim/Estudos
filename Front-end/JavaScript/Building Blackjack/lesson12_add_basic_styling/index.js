let firstCard = 14
let secondCard = 6
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function;

function startGame() {
if (sum <= 20) {
        message ="Do you want to draw a new card? 😐"
} else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
        message= "you're out of the game! 🤭"
    isAlive = false
}
    
}










