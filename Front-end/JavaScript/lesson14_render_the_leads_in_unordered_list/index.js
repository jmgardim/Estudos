let myleads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
let inputEl =  document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const uleEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
    myleads.push(inputEl.value)
    console.log(myleads)
})


// Render the leads in the unordered list using ulEl.textContent
for (let i = 0;  i < myleads.length; i++) {
    uleEl.textContent += myleads[i] + " "
    console.log(myleads[i])
}