const express = require('express')
const router = express.Router()

router.get('/userDetails', (req, res) => {
     res.send("hello world from login route");
   
     
 })

 module.exports = router;