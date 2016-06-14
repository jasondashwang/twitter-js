module.exports = function(io){
    var express = require('express');
    var router = express.Router();
    // could use one line instead: var router = require('express').Router();
    var tweetBank = require('../tweetBank');
    var bodyParser = require('body-parser');
    var socketio = require('socket.io');

    router.use(bodyParser.urlencoded({ extended: false}));
    router.use(bodyParser.json());

    router.post('/tweets/', function(req, res, next){
    console.log("is posting");
      io.sockets.emit('new_tweet', { name: req.body.name, text: req.body.text});
      var name = req.body.name;
      var text = req.body.text;
      tweetBank.add(name, text);
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
      res.render('index', { title: 'All tweets by ' + req.params.name, tweets: tweets, userName: req.params.name ,showForm: true});
    });

    router.get('/tweets/', function(req, res, next){
      var tweets = tweetBank.list();
      res.render( 'index', { title: 'All tweets', tweets: tweets, userName: "", showForm: false} );
    });

    router.use(function (err, req, res, next) {
    	if(err) console.err("You got an error");
    	res.end();
    });



    return router;
};

