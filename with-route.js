const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(content);
});

app.get('/healthcheck', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).json({status:'ok'});
});
app.listen(process.env.PORT || 8080);
