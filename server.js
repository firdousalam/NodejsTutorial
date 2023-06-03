const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();
const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const userRoute = require('./router/router');
app.use('/users',userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})