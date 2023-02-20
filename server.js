const express = require('express');
const app = express()
const port = 3000
console.log("new deployment");
app.get('/', (req, res) => {
  var host = req.get('host');
  var origin = req.get('origin');
  var Hhost = req.headers.host;
var Horigin = req.headers.origin;
  res.send('Hello World! '+host+" origin "+origin+" hHost"+Hhost+" hOrigin "+Horigin);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})