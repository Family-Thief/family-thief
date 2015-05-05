var db = require('../config/dbConfig.js');
var Sequelize = require('sequelize');
var User = require('./user.js');
var Project = require('./project.js');

var ProjectUpvote = db.define('ProjectUpvote',
  {
    upvoter: {
      type: Sequelize.INTEGER,
      references: User,
      referencesKey: "id"
    },
    projectupvoted: {
      type: Sequelize.INTEGER,
      references: Project,
      referencesKey: "id"
    }

  }
);

db.sync();

module.exports = ProjectUpvote;
