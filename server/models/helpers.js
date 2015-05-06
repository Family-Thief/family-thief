var Sequelize = require('sequelize');
var User = require('./user.js');
var Project = require('./project.js');
var ProjectUpvote = require('./projectupvotes.js');
var Contribution = require('./contributions.js');
var ContributionUpvote = require('./contributionupvotes.js');
var ContributionComment = require('./contributioncomments.js');
var ProjectComment = require('./projectcomments.js');
var jwt = require('jsonwebtoken');

module.exports.authenticate = function(username, password, response, secret) {
  User.find({where: {username: username}}).then(function(user) {
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


module.exports.findAllInfo = function(username, response) {
  //finding the logged in user
  User.find({where: {username:username}}).then(function(user){
    if (user) {
      //finding all their projects
      Project.findAll({where: {user_id: user.id}}).then(function(allProjects){
        var projectsArray = [];
        var uniqueProjects = [];
        for (var i = 0; i < allProjects.length; i++) {
          projectsArray.push(allProjects[i].dataValues);
          var projectId = allProjects[i].dataValues.id;
          uniqueProjects.push(projectId);
        }
        //finding all their contributions
        Contribution.findAll({where: {contributor: user.id}}).then(function(allContributions) {
          var contributionsArray = [];
          var uniqueContributions = [];
          for (var j = 0; j< allContributions.length; j ++) {
            contributionsArray.push(allContributions[j].dataValues);
            var contributionId = allContributions[j].dataValues.id;
            if (uniqueContributions.indexOf(contributionId) < 0) {
              uniqueContributions.push(contributionId);
            }
          }
          //finding and counting all unseenhelprequests
            Contribution.findAndCountAll({where:{project: uniqueProjects, unseenHelp: false}}).then(function(unseenHelps) {
              //finding and counting all unseencomments from projects
              ProjectComment.findAndCountAll({where:{projectCommented: uniqueProjects, unseenComment: false}}).then(function(unseenProjectComments) {
                //finding and counting all unseencomments from contributions
                ContributionComment.findAndCountAll({where:{contributionCommented: uniqueContributions, unseenComment: false}}).then(function(unseenContributionComments) {
                  //finding and counting all votes for projects
                    ProjectUpvote.findAndCountAll({where:{projectupvoted: uniqueProjects}}).then(function(projectUpvotes) {
                      //finding and counting all votes for contributions
                      ContributionUpvote.findAndCountAll({where: {contributionupvoted: uniqueContributions}}).then(function(contributionUpvotes) {

                          var profile = {
                            username: user.username,
                            email: user.email,
                            helpRequests: projectsArray,
                            contributions: contributionsArray,
                            numberUnseenHelps: unseenHelps.count,
                            numberUnseenComments: unseenProjectComments.count + unseenContributionComments.count,
                            votes: projectUpvotes.count + contributionUpvotes.count
                          }
                          console.log("Delivering profile");
                          response.json(profile);
                      });
                    });
                });
              });
            });
        });
      });
    } else {
      response.send(401, "Error - how can you not be found when logged in?");
    }
  })
};

module.exports.searchOrMake = function(username, email, password, response, secret) {
  User.find({where: {username: username}}).then(function(user) {
    if(user) {
      console.log('User exists');
      response.send(401, "That user already exists!");
    } else {
      User.create({username: username, email: email}).then(function(user) {
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

module.exports.helpRequest = function(username, project, response) {
  User.find({where: {username: username}}).then(function(user) {
    if(user) {
      Project.create({title: project.title, summary: project.summary, text: project.text, user_id: user.id}).then(function() {
        var profile = {
          username: user.username,
          email: user.email
        };
        console.log("Passing back token");
        response.json(profile);
      })
    } else {
        console.log("Error while creating project");
    }
  });
};

module.exports.projectUpvote = function(userId, projectId, response) {
  ProjectUpvote.create({upvoter: userId, projectupvoted: projectId}).then(function() {
      response.send(201, "Project upvoted");
    })
};

module.exports.viewProject = function(projectId, response) {
  Project.find({where: {id: projectId}}).then(function(project) {
    if(project) {
      Contribution.findAll({where: {project:projectId}}).then(function(contributions) {
        var allContributions = [];
        for (var i = 0; i < contributions.length; i++) {
          allContributions.push(contributions[i].dataValues);
        }
        ProjectUpvote.findAndCountAll({where:{projectupvoted: projectId}}).then(function(projectvotes) {
          var projectDetails = {
            title: project.title,
            summary: project.summary,
            text: project.text,
            votes: projectvotes.count,
            contributions: allContributions,
            origDate: project.createdAt
          };
          console.log("Showing project details");
          response.json(projectDetails);
        });
      })
    } else {
        console.log("Error while finding project");
    }
  });
};

module.exports.makeContribution = function(username, contribution, response) {
  User.find({where: {username: username}}).then(function(user) {
    if(user) {
      Contribution.create({contributor: user.id, project: contribution.helpedId, text: contribution.text, unseenHelp: false}).then(function() {
        response.send(201, "Contribution made");
      });
    } else {
        console.log("Error while making contribution");
    }
  });
};

module.exports.contributionComment = function(contribution, response) {
  User.find({where: {username: contribution.commenter}}).then(function(user) {
    if(user) {
      ContributionComment.create({comment: contribution.text, unseenComment: false, commenter: user.id, contributionCommented: contribution.contributionId}).then(function() {
        response.send(201, "Contribution comment made");
      });
    } else {
        console.log("Error while making contribution comment");
    }
  });
};

