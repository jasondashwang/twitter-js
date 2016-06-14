var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/tweets/:tweetnumber', function(req, res, next){
  var tweets = tweetBank.list();
  res.render('index', { title: 'Twitter.js', tweets: [tweets[+(req.params.tweetnumber)]] });
});

router.get('/tweets/', function(req, res, next){
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;

