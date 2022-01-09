let myleads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
let inputEl =  document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
// 2. grab the unordered list and store it in a const variable called ulEl

const uleEl = document.getElementById("ul-el")
console.log(uleEl)

inputBtn.addEventListener("click", function() {
    myleads.push(inputEl.value)
    console.log(myleads)
})


// log out the items in the myLeads array using a for loop
for (let i = 0;  i < myleads.length; i++) {
    console.log(myleads[i])
}