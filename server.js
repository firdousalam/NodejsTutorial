const express = require('express');
const app = express()
const port = 3000
console.log("new deployment for new code");
app.get('/', (req, res) => {
  console.log(req.get('User-Agent'));

  var host = req.get('host');
  var origin = req.get('origin');
  var Hhost = req.headers.host;
var Horigin = req.headers.origin;
const { pathname } = req?._parsedUrl || {};
var Url = req.protocol + '://' + req.get('host') + req.originalUrl;
console.log(Url);
//sconsole.log(pathname);
const clientUrl = req.header('Referer');
console.log(clientUrl);
  res.send('Hello World! '+Url+"client browser Url"+clientUrl);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})