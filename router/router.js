const express = require('express')
const router = express.Router()
//const userController = require('../controller/userController');

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    //token autheticate
    // anythink
    next()
})

// define the home page route
router.get('/userDetails/:userName', (req, res) => {
   // res.send("hello world");
  
    userController.getUser(req,res);
})
// define the home page route
router.get('/userDetails/userName', (req, res) => {
    // res.send("hello world");
   
     userController.getUser(req,res);
 })
module.exports = router;
