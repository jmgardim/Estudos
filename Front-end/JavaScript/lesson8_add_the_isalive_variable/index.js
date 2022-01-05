let firstCard = 14
let secondCard = 6
let sum = firstCard + secondCard
let hasBlackJack = false

// 1. Create a variable called isAlive and assign it to true
let isAlive = true


// 2. Flip its value to false in the aporpriate code block
if (sum <= 20) {
    console.log("Do you want to draw a new card?😐")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack!🥳")
    hasBlackJack = true
} else {
    console.log("you're out of the game!🤭")
    isAlive = false
}

// CASH OUT!
console.log(hasBlackJack)




