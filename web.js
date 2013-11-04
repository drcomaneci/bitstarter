var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.configure(function() {
  var hourMs = 1000*60*60;
  app.use(express.static(__dirname + '/', { maxAge: hourMs }));
  app.use(express.directory(__dirname + '/'));
  app.use(express.errorHandler());
});

app.get('/', function(request, response) {
  var index_contents = fs.readFileSync("index.html");
  response.send(index_contents.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
