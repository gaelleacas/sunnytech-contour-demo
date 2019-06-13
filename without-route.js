const http = require('http');
const handleRequest = (req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(content);

};
const server = http.createServer(handleRequest);
server.listen(process.env.PORT || 8080);




