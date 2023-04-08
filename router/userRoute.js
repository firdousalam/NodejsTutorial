const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    //token autheticate
    // anythink
    next()
})

// define the home page route
// localhost/users/userDetails
router.get('/userDetails', (req, res) => {
   // res.send("hello world");
  
    userController.getUser(req,res);
})

module.exports = router;