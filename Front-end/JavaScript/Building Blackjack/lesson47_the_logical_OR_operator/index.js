 // Create two Boolean variables, likesDocumentaries and likesStartups
// Use an or statement (||) to call recommendMovie() if either of those variables are true

let  likesDocumentaries =  true
let  likesStartups =  true

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie() 
}


function recommendMovie() {
    console.log("Hey, check out this new film we think yout will like!")
}