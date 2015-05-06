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
app.use('/api/helpRequests/', expressJwt({secret: secret}));
app.use('/api/contributions/', expressJwt({secret: secret}));
app.use('/api/contributions/comments', expressJwt({secret: secret}));

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
  helper.findAllInfo(decoded.username, res);
});

//path for help request
app.post('/api/helpRequests', function(req, res){
  var decoded = jwt.decode(req.headers.authorization.slice(7));
  helper.helpRequest(decoded.username, req.body, res);
});

//path for votes
app.post('/api/helpRequests/votes', function(req, res){
  var decoded = jwt.decode(req.headers.authorization.slice(7));
  helper.projectUpvote(decoded.id, req.body.helpRequestId, res);
});

//path for viewing specific helpRequest
app.get('/api/helpRequests/:id', function(req, res){
  helper.viewProject(req.params.id, res);
});

//path for posting contribution
app.post('/api/contributions', function (req, res){
  var decoded = jwt.decode(req.headers.authorization.slice(7));
  helper.makeContribution(decoded.username, req.body, res);
});

//path for posting contribution comments
app.post('/api/contributions/comments', function (req, res){
  helper.contributionComment(req.body, res);
});

app.listen(3000);

