const express = require('express')
const app = express()

const db = require('./models')

// Routers
const memberRouter = require('./routes/Members')
app.use("/members", memberRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server Running on Port 3001")
    });
})

