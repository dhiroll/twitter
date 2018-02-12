var express = require('express');
var app = express();
var sanitizer = require('sanitizer');

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
  res.render('client.ejs');
});
server.listen(3000, function(req, res){
    console.log("server started");
});