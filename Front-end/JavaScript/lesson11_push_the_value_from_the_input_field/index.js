let myleads = []
let inputEl =  document.getElementById("input-el")
let saveLead = document.getElementById("input-btn")

// Push the value "www.awesomelead.com" to myArray when the input button is clicked



saveLead.addEventListener("click", function() {
    // push the value from inputEl into myLeads array
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myleads.push(inputEl.value)
    console.log(myleads)
})