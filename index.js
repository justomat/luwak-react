#!/usr/bin/env node

var express = require('express'),
    fs = require('fs')
    url = require('url');
var app = express();

app.use('/public', express.static(__dirname));


app.post('/save', function (req, res) {
  var body = '';
  filePath = __dirname + '/data/App.java';
  
  req.on('data', function (data) {
    body += data;
  });
  
  req.on('end', function () {
    fs.writeFile(filePath, body, () => {
      res.send('SUCCESS!!');
    });
  });
});

app.listen(8888, function () {
  console.log('listening on port 8888..');
});