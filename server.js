var express = require("express");
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

var app		= express();  

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.use(express.static(__dirname + '/public'));


var server = app.listen(process.env.port || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Event Registration Application is listening at http://%s:%s', host, port);
});