const express = require("express");
const { engine } = require("express-handlebars");
const conn = require('./db/conn')

const User = require('./models/User')

const app = express();

app.use(
    express.urlencoded({
      extended: true
    }),
  )

app.use(express.json())


app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));



app.get("/", async  (req, res) => {
  const users = await User.findAll({ raw: true })

    console.log(users)

  res.render('home',  { users: users});
})

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.ocuupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on') {
        newsletter = true
    }else {
        newsletter = false
    }

    console.log(req.body)

    await User.create({name, occupation, newsletter})

    res.redirect('/')


})

app.get("/",  (req, res) => {
  res.render("home");
});


conn.sync().then(() => {
  app.listen(3000);
})
.catch((err) => console.log(err))

