var express = require('express');
var sanitizer = require('sanitizer');
var app = express();
app.use(express.static('public'));

var server = require('http').createServer(app);
var io = require('socket.io')(server);


io.on('connection', function (socket) {
  var name = 'Xavier';
  socket.on('send_message', function (data) {
    console.log('send_message');
    io.emit('new_message', {
      message: sanitizer.sanitize(data.message),
      id: socket.id
    });
  });
});


app.get('/', function(req, res) {
  res.render('client.ejs');
});

server.listen(3000, function(req, res){
  console.log("server started");
});