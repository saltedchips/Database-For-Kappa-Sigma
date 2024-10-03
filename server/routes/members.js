const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req,res) => 
    db.member.findAll()
    .then(members => {
        console.log(members)
        res.sendStatus(200)
    })
    .catch(err => console.log(err))
    )

module.exports = router
