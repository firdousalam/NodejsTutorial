const express = require('express')
const router = express.Router()
const userController = require('../controller/userController');
const auth = require("../middleware/auth");

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    //token autheticate
    // anythink
    next()
})
router.post("/addUser",function(req,res){
    userController.saveUser(req,res);
})
router.get("/getUser",auth,function(req,res){
    userController.getUser(req,res);
})
router.get('/user/:listId',function(req,res){
    userController.getUserById(req,res);
})
router.delete('/deleteUser/:listId',auth,function(req,res){
    userController.deleteUserById(req,res);
})
// Register
router.post("/register", (req, res) => {
    // our register logic goes here...
    userController.registerUser(req,res);
});

// Login
router.post("/login", (req, res) => {
    userController.loginUser(req,res);
});
module.exports = router;
