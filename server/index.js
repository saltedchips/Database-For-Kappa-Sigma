const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./models')

db.sequelize.authenticate() 
    .then(() => console.log('Connected'))
    .catch(err => console.log(("An error occured: " + err)))


const app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  });

  app.use("/home", require("./routes/members"))


const PORT = process.env.port || 3001





db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Server Running on Port " + PORT)
    });
})

