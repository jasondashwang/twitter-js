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


// app.get('/tweets/:tweetnumber', function(req, res, next){
//   res.render('singleTweet', tweetBank.list()[+(req.params.tweetnumber)]);
// });

// app.get('/tweets/', function(req, res, next){
//   res.render('allTweets', {data:tweetBank.list()});
// });

// app.post('/tweets/', function(req, res, next){

// });


/*
app.use(function(req, res, next){
  console.log(req.method, req.path);
  next();
});

app.get('/', function(req, res, next){
  console.log('you reached the root!');
  next();
})

app.get('/special/:directory', function(req, res, next){
  console.log('you reached the special area');
  throw Error('bad area!');
  next();
});

app.use(function(req, res, next){
  console.log(req.method, req.path, 200);
  res.end();
});

app.use(function(err, req, res, next){
  console.log(req.method, req.path, 400);

  res.end();
})
*/


app.listen(3000);

