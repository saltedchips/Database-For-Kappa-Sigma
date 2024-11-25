const express = require('express')
const router = express.Router()
const db = require('../models')

//Gets members
router.get('/', (req,res) => 
    db.member.findAll()
    .then(members => {
        
        console.log(members)
        res.sendStatus(200)
    })
    .catch(err => console.log(err))
    )

router.post('/delete', async (req, res) => {
    try{
        const user = await userService.deleteUser();
        res.send(user);
    }catch(err){
        return next(err);
    }
}

)



//Add a member
router.get('/add', (req,res) => {
    const data = {
        
    }
});

module.exports = router
