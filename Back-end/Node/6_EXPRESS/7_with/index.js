const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/dashboard',(req, res) =>{
    const items = ["Itens a", "Item b", "Item c"]


    res.render('dashboard', { items })
})

app.get('/post', (req, res) =>{
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js....',
        comments: 4,
    }

    res.render('blogpost', {post})

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