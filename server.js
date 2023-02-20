const express = require('express');
var url = require("url");
const app = express()
const port = 3000
console.log("mmmmmmmmmmm");
app.get('/', (req, res) => {
  console.log(req);
  var pathname = url.parse(req.url).pathname;
  console.log("Request for " + pathname + " received.");
  console.log(req.url);

  res.send('Hello World! '+url.parse(request.url));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})