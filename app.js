var express = require('express');
var swig = require('swig');
var tweetBank = require('./tweetBank');
var routes = require('./routes');
var socketio = require('socket.io');


var app = new express();
app.use(express.static('public'));

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');


swig.setDefaults({cache: false});



var server = app.listen(3000);
var io = socketio.listen(server);

app.use('/', routes(io));





