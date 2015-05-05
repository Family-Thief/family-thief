var db = require('../config/dbConfig.js');
var Sequelize = require('sequelize');
var User = require('./user.js');
var Project = require('./project.js');

var ProjectComment = db.define('ProjectComment',
  {
    comment: Sequelize.STRING,
    unseenComment: Sequelize.BOOLEAN,
    commenter: {
      type: Sequelize.INTEGER,
      references: User,
      referencesKey: "id"
    },
    projectCommented: {
      type: Sequelize.INTEGER,
      references: Project,
      referencesKey: "id"
    }

  }
);

db.sync();

module.exports = ProjectComment;

