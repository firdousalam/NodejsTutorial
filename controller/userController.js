const userUtils = require('../utils/userUtils')
const userModel = require("../model/userSchema");
const MongooseConn = require("../config/MongoDBConfig")
//bussiness logic
exports.getUser=(req,res)=>{
   userModel.find({}).then((list)=>{
      res.send(list);
    }).catch((err)=>{
        res.status(500).send(error);
    })

}
exports.saveUser= (request, response) => {
  
      let insertData = {"name" : userUtils.changeToUpperCase(request.body.name),
      "age" : request.body.age};
      const user = new userModel(request.body);
      console.log("app hit");
      try {
       user.save();
      response.send(user);
      } catch (error) {
      response.status(500).send(error);
      }
}
exports.getUserById=(req,res)=>{
  
   userModel.find({"_id":req.params.listId}).then((list)=>{
      res.send(list);
  }).catch((err)=>{
      res.send(err);
  })
}
exports.deleteUserById=(req,res)=>{
   userModel.deleteOne({"_id":req.params.userId})
   .then((list)=>{
       res.send(list);
   }).catch((err)=>{
       res.send(err);
   })

}