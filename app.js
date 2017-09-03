var express = require('express');
var app = express();

//for serving static files
app.use(express.static('public'));

app.use('/favicon.ico', express.static('favicon.ico'));
app.use('/', function(req, res, next){
   console.log("A request received at " + Date.now());
   next();
});

app.get('/', function(req, res){
console.log("req");
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})