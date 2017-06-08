// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require('express');
var jsonData = {count: 12, message: 'hey'};

var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html', function(err){
    if(err){
      res.status(500).send(err);
    }
  })
});

app.get('/data', function(req, res){
  res.send(jsonData);
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
