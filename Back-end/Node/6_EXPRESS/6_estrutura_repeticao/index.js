const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/dashboard',(req, res) =>{
  
  
    const items = ["Itens a", "Item b", "Item c"]


    res.render('dashboard', { items })


    
})

app.get('/', (req, res) => {
    const user = {
        name: 'João Matheus',
        surname: 'Gardim Dos Santos',
        age: 30,
    }

    const palavra = "Teste"

    const auth = false

    const approved = true

    res.render('home', {user: user, palavra, auth, approved})
})

app.listen(3000, () => {
    console.log('App funcionando!')
})