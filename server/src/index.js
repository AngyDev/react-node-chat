const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';

const server = http.createServer(app);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
})

server.listen(PORT, HOST, () => {
  console.log(`Server has started on http://${HOST}:${PORT}`);
});