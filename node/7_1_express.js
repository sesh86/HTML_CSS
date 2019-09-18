const express = require('express')
const app = express();
// app.set('trust proxy', true)
app.get('/', function (req, res) {
  console.log(req.header)
  res.send('Hello World!')
})
app.get('/about', function (req, res) {
  res.send('This is about!')
})

app.post('/demo', function (req, res) {
  res.send('This is demo!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
