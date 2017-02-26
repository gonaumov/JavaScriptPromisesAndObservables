var express = require('express')
var app = express()
var path = require('path');
var sleep = require('sleep');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/examples/httpRequest.html');
});

app.get('/async', function (req, res) {
  res.sendFile(__dirname + '/examples/httpRequestAsync.html');
});



app.get('/result', function (req, res) {
  // sleep.sleep(680);
  res.send('This is the result!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

