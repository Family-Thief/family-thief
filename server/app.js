var express = require('express');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var helper = require('./models/helpers.js');
var fs = require('fs');

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client'));

var secret = String(fs.readFileSync(__dirname + '/config/secret'));

//refactor this to explicitly protect certain routes
app.use('/api/auth/local', expressJwt({secret: secret}));
app.use('/api/things', expressJwt({secret: secret}));
app.use('/api/helpRequests/votes', expressJwt({secret: secret}));
app.use('/api/users/me', expressJwt({secret: secret}));

//path for when users are created
app.post('/api/users', function(req, res){
  helper.searchOrMake(req.body.username, req.body.email, req.body.password, res, secret);
});

// path for when users are logging in
app.post('/auth/local', function(req, res) {
  helper.authenticate(req.body.username, req.body.password, res, secret);
});

//path for user's profile
app.get('/api/users/me', function(req, res){
  var decoded = jwt.decode(req.headers.authorization.slice(7));
  helper.findAllInfo(decoded.username, res, secret);
});

//path for help request
app.post('/api/helpRequests', function(req, res){
  console.log("in post");
  var decoded = jwt.decode(req.headers.authorization.slice(7));
  helper.helpRequest(decoded.username, req.body, res, secret);
});

//path for votes
app.post('/api/helpRequests/votes', function(req, res){
  console.log("in post");
  var decoded = jwt.decode(req.headers.authorization.slice(7));
  helper.helpRequest(decoded.username, req.body, res, secret);
});


app.get('/api/things', function(req, res){
  var info = {};
  res.json(info);
});

app.get('/restricted', function (req, res){
    console.log("user is calling a restricted route");
    res.json({
      name: 'Hi there'
    });
});

app.listen(3000);

