const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/getMyName',(req,res)=>{
    res.send("my name is Tecgnophile firdous. Please subscribe my channel");
})
app.post('/postUrl',(req,res)=>{
    res.send("this is my post call");
})

// url?id=val  get query
//url/hhh/hhhjj/jjjjj // get params
// url/hhh  // send data through body

app.get('/getQuery',(req,res)=>{
    res.send("query data using nodemon = "+req.query.id);
})
app.get('/getParams/:paramsId',(req,res)=>{
    res.send("Param data using nodemon = "+req.params.paramsId);
})
app.post('/postData',(req,res)=>{
    console.log(req.body.name);
    res.send(JSON.stringify(req.body));
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})