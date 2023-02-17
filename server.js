const express = require('express')
const app = express()
const port = 3000
console.log("mmmmmmmmmmm");
app.get('/', (req, res) => {
  res.send('Hello World! '+req.protocol + '://' + req.get('host') + req.originalUrl);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})