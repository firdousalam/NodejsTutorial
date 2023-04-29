const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()
const port = 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//mongodb://TechnophileFirdous:Technophile@1234@ac-k5g9okb-shard-00-00.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-01.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-02.kzuwf7d.mongodb.net:27017/?ssl=true&replicaSet=atlas-xjy27e-shard-0&authSource=admin&retryWrites=true&w=majority
mongoose.connect("mongodb://TechnophileFirdous:Technophile1234@ac-k5g9okb-shard-00-00.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-01.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-02.kzuwf7d.mongodb.net:27017/?ssl=true&replicaSet=atlas-xjy27e-shard-0&authSource=admin&retryWrites=true&w=majority"
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
app.post("/add_user", async (request, response) => {
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
/*


const loginRoute = require('./router/loginRoute') 
const userRoute = require('./router/userRoute');
const userModel = require("./model/userSchema");
//const mongoConfig = require('./config/MongoDBConfig');


// database connection
//mongodb://MeanYoutube:MeanYoutube1234@ac-gnqfovj-shard-00-00.rxlvclw.mongodb.net:27017,ac-gnqfovj-shard-00-01.rxlvclw.mongodb.net:27017,ac-gnqfovj-shard-00-02.rxlvclw.mongodb.net:27017/?ssl=true&replicaSet=atlas-y84hfx-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect("mongodb://MeanYoutube:MeanYoutube1234@ac-gnqfovj-shard-00-00.rxlvclw.mongodb.net:27017,ac-gnqfovj-shard-00-01.rxlvclw.mongodb.net:27017,ac-gnqfovj-shard-00-02.rxlvclw.mongodb.net:27017/?ssl=true&replicaSet=atlas-y84hfx-shard-0&authSource=admin&retryWrites=true&w=majority"
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