let myLeads = `["www.awesomelead.com"]`



const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myName", "Per Harald Borgen")


let name = localStorage.getItem("myName")
console.log(name)

// localStorage.clear()



// localStorage.setItem("myLeads", "www.examplelead.com")
// console.log( localStorage.getItem("myLeads"))

// 1. Save a key-value pair in localstorage
// 2. Refresh the page. Get the value an log it to the console
// 3. Clear localStorage

// HINTS
// localstorage.setItem(key, value)
// localstorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}