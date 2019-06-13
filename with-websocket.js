// Without route
const http = require('http');
const handleRequest = (req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  //res.end(`Hello Word `${process.env.VERSION}`!`);
  res.end(content);

};
const server = http.createServer(handleRequest);

// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
  console.log('Un client est connecté !');
});


server.listen(process.env.PORT || 8080);

// [END all]
