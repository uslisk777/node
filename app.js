
var express = require('express');
var app = express();
app.get('/', function(req, res){
   res.send("Hello World!");
<<<<<<< HEAD
 
=======
   res.send("PROCESS: ", process);
   console.log("PROCESS: ", process);
>>>>>>> c5e00f65c34d33a12d5b1dbbb52e49f002ecdb4e
});
app.listen(5000, '172.31.39.248');
