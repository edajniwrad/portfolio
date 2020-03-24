var express = require('express');
const path = require('path');
var app = express();

app.use(express.static(__dirname + '/portfolio'));

// all unmatched requests to this path, with no file extension, redirect to the dash page
app.use('/', function ( req, res, next ) {
  // uri has a forward slash followed any number of any characters except full stops (up until the end of the string)
  if (/\/[^.]*$/.test(req.url)) {
      res.sendfile(__dirname + req.params[0]);
  } else {
    res.sendFile(__dirname + 'portfolio/index.html');
  }
});

var PORT = process.env.PORT || 3000;

app.listen(PORT);
