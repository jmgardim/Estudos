
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)


function increment() {
    count += 1
    countEl.innerText = count
} 

// 1. Create a function, save(), which logs out the count when it's called 

function save() {
    let countStr = count +  " - "
    saveEl.innerText +=  countStr

    console.log(count)
}

