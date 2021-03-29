var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World from NodeJS on port 1337!')
})

app.listen(1337, function () {
  console.log('Listening on port 1337...')
})