const userUtils = require('../utils/userUtils')
//bussiness logic
exports.getUser=(req,res)=>{
   let uppcaseUser = userUtils.changeToUpperCase("now i am calling hello world text from controller and making it upper case from utils");
    res.send(uppcaseUser)
   //res.send("Hello World from controllers")

}