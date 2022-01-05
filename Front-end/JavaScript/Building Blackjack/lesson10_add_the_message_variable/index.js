
let firstCard = 14
let secondCard = 6
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

// 1. Declare a variable called message and assign its value to an empty string
    let message = ""

// 2. Reassing the message variable to the string we're logging out
if (sum <= 20) {
        message ="Do you want to draw a new card?😐"
} else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!🥳"
    hasBlackJack = true
} else {
        message= "you're out of the game!🤭"
    isAlive = false
}

// 3. log it out
console.log(message)




