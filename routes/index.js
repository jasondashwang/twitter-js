module.exports = function(io){
    var express = require('express');
    var router = express.Router();
    // could use one line instead: var router = require('express').Router();
    var tweetBank = require('../tweetBank');
    var bodyParser = require('body-parser');
    router.use(bodyParser.urlencoded({ extended: false}));
    router.use(bodyParser.json());

    router.post('/tweets/', function(req, res, next){
      var name = req.body.name;
      var text = req.body.text;
      tweetBank.add(name, text);
      res.redirect('/');
    });
    router.get('/', function (req, res) {
      var tweets = tweetBank.list();
      res.render( 'index', { title: 'Twitter.js', tweets: tweets, userName: "",showForm: true} );
    });

    router.get('/tweets/:tweetnumber', function(req, res, next){
      var tweets = tweetBank.list();
      res.render('index', { title: 'Tweet number ' + req.params.tweetnumber , tweets: [tweets[+(req.params.tweetnumber)]], showForm: false});
    });

    router.get( '/users/:name', function(req, res, next){
      var tweets = tweetBank.find(function(object){
        return object.name === req.params.name;
      });
      res.render('index', { title: 'All tweets by ' + req.params.name, tweets: tweets, userName: req.params.name,showForm: true});
    });

    router.get('/tweets/', function(req, res, next){
      var tweets = tweetBank.list();
      res.render( 'index', { title: 'All tweets', tweets: tweets, showForm: false} );
    });



    return router;
};

