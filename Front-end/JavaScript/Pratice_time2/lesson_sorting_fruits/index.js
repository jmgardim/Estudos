let fruit = ["apple", "orange", "apple", "apple", "orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples on to the appleshelf
// and the oranges on to the orangeShelf, Use a for loop,
// a conditional statement, and the textContent property.

function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "apple") {
            appleShelf.textContent += "apple"
        } else {
            orangeShelf.textContent += "orange"
        }
    }
}

sortFruit()