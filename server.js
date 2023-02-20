const express = require('express');
const app = express()
const port = 3000
console.log("new deployment for new code");
app.get('/', (req, res) => {
  console.log(req.headers);

  var host = req.get('host');
  var origin = req.get('origin');
  var Hhost = req.headers.host;
var Horigin = req.headers.origin;
const { pathname } = req?._parsedUrl || {};
console.log(pathname);
  res.send('Hello World! '+host+" origin "+origin+" hHost"+Hhost+" hOrigin "+Horigin);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})