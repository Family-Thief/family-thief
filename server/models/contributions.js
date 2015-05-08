var db = require('../config/dbConfig.js');
var Sequelize = require('sequelize');
var User = require('./user.js');
var Project = require('./project.js');

var Contribution = db.define('Contribution',
  {
    contributionText: Sequelize.TEXT,
    unseenHelp: Sequelize.BOOLEAN,
    contributor: Sequelize.INTEGER,
    project: Sequelize.INTEGER

  }
);

db.sync();

module.exports = Contribution;
