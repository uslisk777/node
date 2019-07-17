

const helpers = require ("./helpers")
const http = require ("http")

const server = http.createServer((req, res) => {
  res.end("hello world from node js")
});

server.listen(3001);

const total = helpers.sum(10, 200);
console.log("TOTAL: ", total);
