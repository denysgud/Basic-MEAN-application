process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 8080;

var mongoose = require('./config/mongoose'); // must be loaded before any other configuration
var express = require('./config/express');
var passport = require('./config/passport');

var db = mongoose();
var app = express(db);
var passport = passport();

app.listen(process.env.PORT);

module.exports = app;

console.log('Server running at http://localhost:' + process.env.PORT + '/');
