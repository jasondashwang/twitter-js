var express = require('express');
var swig = require('swig');
var tweetBank = require('./tweetBank');
var routes = require('./routes');


var app = new express();
app.use('/', routes);
app.use(express.static('public'));

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');


swig.setDefaults({cache: false});



app.listen(3000);

