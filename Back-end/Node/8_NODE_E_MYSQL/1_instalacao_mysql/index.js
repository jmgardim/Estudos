const express = require('express')
const { engine } = require('express-handlebars');
const mysql = require('mysql')

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    senha:'United#012',
    database: 'nodemysql2',
})

conn.connect(function(err){

    if(err) {
        console.log(err)
    }

    console.log('Conectou ao MySQL!')

    app.listen(3000)
})
