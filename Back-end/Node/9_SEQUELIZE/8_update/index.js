const express = require("express");
const { engine } = require("express-handlebars");
const conn = require('./db/conn');
const { sync } = require("./models/User");

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



app.get('/users/create', (req,res) =>{
  res.render('adduser')
})

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const ocuppation = req.body.ocuppation
    let newsletter = req.body.newsletter

    if(newsletter === 'on') {
        newsletter = true
    }else {
        newsletter = false
    }

    console.log(req.body)

    await User.create({name, ocuppation, newsletter})

    res.redirect('/')


})


app.get('/users/:id', async (req, res) => {
  const id =  req.params.id

  const user = await User.findOne({ raw: true, where: { id: id } })

  res.render('userview', { user })
})


app.post('/users/delete/:id', async (req, res) => {
      const id = req.params.id

      await User.destroy({ where: {id: id} })

      res.redirect('/')


})


app.get('/users/edit/:id', async (req, res) => {
  const id = req.params.id

  const user = await User.findOne({ raw: true, where: { id: id} })

  res.render('useredit', { user })

})


app.post('/users/update', async (req, res) =>{
      const id = req.body.id
      const name = req.body.name
      const ocuppation = req.body.ocuppation
      let newsletter = req.body.newsletter

      if(newsletter === 'on') {
        newsletter = true
      } else {
        newsletter = false
      }

      const userData = {
          id,
          name,
          ocuppation,
          newsletter

      }

      await User.update(userData,{ where: {id: id}})

      res.redirect('/')
})





app.get("/",  (req, res) => {
  res.render("home");
});


conn.
// sync({force: true})
sync()
.then(() => {
  app.listen(3000);
})
.catch((err) => console.log(err))

