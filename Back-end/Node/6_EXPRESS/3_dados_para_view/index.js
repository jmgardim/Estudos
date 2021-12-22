const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const user = {
        name: 'João Matheus',
        surname: 'Gardim Dos Santos',
        age: 30,
    }

    const palavra = "Teste"
    res.render('home', {user: user, palavra})
})

app.listen(3000, () => {
    console.log('App funcionando!')
})