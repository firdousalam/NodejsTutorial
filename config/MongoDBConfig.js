var mongoose = require("mongoose");
require('dotenv').config()
mongoose.Promise = global.Promise;
const DBURL = process.env.DBCONFIG;
mongoose.set('strictQuery', false);
console.log("starting mongo connection");
mongoose.connect(DBURL,{ useNewUrlParser: true, useUnifiedTopology: true}).then((conn)=> {console.log("connected from Config File")})
.catch((err)=> {console.log("connection error",err)})

module.exports = mongoose;

