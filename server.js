const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();
const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
let moment = require("moment");
let _ = require("lodash");
console.log(_.chunk(['a', 'b', 'c', 'd',1,2,3,4,5,6,7], 3));

console.log(_.compact([0, 1, false, 2, '', 3,7,"sd"]))

const request = require('request');




app.get("/translator",(req,res)=>{
  
const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': 'c8822dc573msh91f288ebcdd6557p1a7c2bjsne22a94eca2a7',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  },
  form: {
    q: 'Hello, world! welcome to my youtube Channel Technophile Firdous',
    target: 'es',
    source: 'en'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
  res.send(body);
});

})

app.get("/generateToken",(req,res)=>{
  let response = request.get("http://localhost:5000/getToken");
  res.send(response)
})
app.get("/getToken",(req,res)=>{
  res.send("this is my token"+Math.random());
})
//console.log(moment().format('Do MMMM YYYY'));
//console.log(moment().subtract(10, 'days').calendar())
let mydate = new Date();
// moment
//console.log(mydate); 

const userRoute = require('./router/router');
app.use('/users',userRoute);
var CronJob = require('cron').CronJob;
var job = new CronJob(
    '1 0 12 * * 1',  // every monday at 12:00:01
    function() {
        console.log('You will see this message every second');
    },
    null,
    true,
    'Asia/Kolkata'
);
job.start();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})