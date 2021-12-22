const path = require("path")

// path absoluto
console.log(path.resolve('teste.txt'))

// formar path
const midFolder = "relatórios"
const fileName = 'joãomatheus.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)