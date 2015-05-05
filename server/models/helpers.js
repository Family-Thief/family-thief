var Sequelize = require('sequelize');
var Model = require('./user.js');
var jwt = require('jsonwebtoken');

module.exports.authenticate = function(username, password, response, secret) {
  Model.User.find({where: {username: username}}).then(function(user) {
    if(user) {

      if (user.checkPassword(password)) {
        var profile = {
          username: user.username,
          email: user.email
        };
        console.log("User authenticated!");
        response.json({token: jwt.sign(profile, secret, { expiresInMinutes: 60 * 5})});
      } else {
        console.log("Bad Password, Charlie");
        response.send(401, "Wrong username or password");
      }
    } else {

      console.log("Whoops, user doesn't exsist");
      response.send(401, "Wrong username or password");

    }
  });
};


module.exports.findAllInfo = function(username, response, secret) {
  Model.User.find({where: {username:username}}).then(function(user){
    if (user) {
      UserProject.findAll({where: {userid: user.id}}).then(function(allProjects){
        var profile = {
          username: user.username,
          email: user.email,
          helpRequests: allProjects
        }
        console.log(profile.helpRequests);
        response.json({token: jwt.sign(profile, secret, { expiresInMinutes: 60 * 5})});
      });
    } else {
      response.send(401, "Error - how can you not be found when logged in?");
    }
  })
};

module.exports.searchOrMake = function(username, email, password, response, secret) {
  Model.User.find({where: {username: username}}).then(function(user) {
    if(user) {
      console.log('User exists');
      response.send(401, "That user already exists!");
    } else {
      Model.User.create({username: username, email: email}).then(function(user) {
        user.password = user.setPassword(password);
        var profile = {
          username: user.username,
          email: user.email
        };
        console.log("User created");
        response.json({token: jwt.sign(profile, secret, { expiresInMinutes: 60 * 5})});
      })
    }
  });
};
