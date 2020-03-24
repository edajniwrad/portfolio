var express = require('express');
const path = require('path');
var app = express();

app.use(express.static(__dirname + '/portfolio'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'portfolio/index.html');
});

app.get(/^(.+)$/, function (req, res) {
    res.sendFile(__dirname + req.params[0]);
});

var PORT = process.env.PORT || 3000;

app.listen(PORT);
