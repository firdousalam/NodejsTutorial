const express = require('express');
const bodyParser = require('body-parser')
//const router = require('./router/router')
const userRoute = require('./router/userRoute');
const loginRoute = require('./router/loginRoute') 
const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/users',userRoute);
app.use('/login',loginRoute);

/*
console.log("new deployment for new code");
app.get('/', (req, res) => {
  console.log("hello world");
  res.send("Hello World");
 
})
app.get('/todo', (req, res) => {
  console.log("Todo world");
  res.send("Todo World");
 
})
//http://localhost/items?id=100
app.get("/items", function(req, res) {
  var id = req.query.id;
  res.send("id = "+id);
  //further operations to perform
});
*/

/*
Route parameters
Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.
*/
/*
app.get('/users/:userId/books/:bookId', (req, res) => {
  var params = req.params;
  console.log("userId = ",params.userId);
  console.log("bookId is = ",params.bookId);
  res.send(req.params)
})
app.post("postUrl",(req,res)=>{
  // post code
  // req.body
})

app.post('/PostData', (req, res) => {
  let data = req.body;
  console.log(data);
  res.send('Data Received: ' + JSON.stringify(data));
})

//Here is an example of chained route handlers that are defined by using app.route().

app.route('/book')
  .get((req, res) => {
    console.log("get book")
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })
*/
//app.use('/api',router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})