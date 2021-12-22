const fs = require("fs")

console.log("Início")

fs.writeFile("arquivo.pdf", 'Vai Corinthians de novo', function (err) {
    setTimeout(function () {
        console.log("Arquivo Criado!")
    },1000)
})

console.log('Fim')