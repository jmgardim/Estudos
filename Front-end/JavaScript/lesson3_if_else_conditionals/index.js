// 1. Create two variables, firstCard and SecondCard
//  set their values to a random number between 2-11

// 2. Create a variable, sum and set it to the sum of the two cards

let firstCard = 10
let secondCard = 7

 let sum = firstCard + secondCard + 6 // 23 

if (sum < 21) {
    console.log("Do you want to draw a new card? 😐")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 😁")
} else {
    console.log("You're out of the game! 🤭")
}
