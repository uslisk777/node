
var express = require('express');
var app = express();
app.get('/', function(req, res){
   res.send("Hello World!");

   res.send(process);
   console.log("PROCESS: ", process);
});
app.listen(5000, '172.31.39.248');
