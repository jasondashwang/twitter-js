var express = require('express');
var swig = require('swig');
var app = new express();

var swigInput = {
  title: "An Example",
  people: [{name: "Gandalf"},{name: "Frodo"}, {name: "Hermoine"}]
}


app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

swig.setDefaults({cache: false});

app.get('/', function (req, res) {
  res.render('index', swigInput);
});


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

