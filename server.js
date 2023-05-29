const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config();
const app = express()
const port = 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
console.log("my Database config",process.env.DBCONFIG)
mongoose.connect(process.env.DBCONFIG
,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const userModel = require("./model/userSchema");
app.post("/addUser", async (request, response) => {

  let insertData = {"name" : request.body.name,
                    "age" : request.body.age};
  const user = new userModel(request.body);
  console.log("app hit");
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});


app.get('/getUser',function(req,res){
  userModel.find({}).then((list)=>{
    res.send(list);
  }).catch((err)=>{
      res.status(500).send(error);
  })
})


app.get('/user/:listId', function (req, res) {
  userModel.find({"_id":req.params.listId}).then((list)=>{
      res.send(list);
  }).catch((err)=>{
      res.send(err);
  })
});



/*


const loginRoute = require('./router/loginRoute') 
const userRoute = require('./router/userRoute');
const userModel = require("./model/userSchema");
//const mongoConfig = require('./config/MongoDBConfig');



/*
app.use('/users',userRoute);
app.use('/login',loginRoute);
*/
/*
app.post("/add_user", async (request, response) => {
  const user = new userModel(request.body);
  console.log("app hit");
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})