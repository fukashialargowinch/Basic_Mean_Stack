var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var routes = require('./server/routes/userRoute');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/TestDatabase');

var db = mongoose.connection;

db.once('open', function(){
  console.log('Database connected to the application');
});
app.use(bodyParser.json());
app.use('/', routes);
app.use('/', express.static(path.join(__dirname, './client')));

app.listen(3000, function(){
  console.log('Server is running on port 3000...');
});
