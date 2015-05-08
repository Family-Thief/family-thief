var db = require('../config/dbConfig.js');
var Sequelize = require('sequelize');
var User = require('./user.js');
var Project = require('./project.js');

var ProjectComment = db.define('ProjectComment',
  {
    comment: Sequelize.STRING,
    unseenComment: Sequelize.BOOLEAN,
    commenter: Sequelize.INTEGER,
    projectCommented: Sequelize.INTEGER

  }
);

db.sync();

module.exports = ProjectComment;

