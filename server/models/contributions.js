var db = require('../config/dbConfig.js');
var Sequelize = require('sequelize');
var User = require('./user.js');
var Project = require('./project.js');

var Contribution = db.define('Contribution',
  {
    contributionText: Sequelize.TEXT,
    unseenHelp: Sequelize.BOOLEAN,
    contributor: {
      type: Sequelize.INTEGER,
      references: User,
      referencesKey: "id"
    },
    project: {
      type: Sequelize.INTEGER,
      references: Project,
      referencesKey: "id"
    }

  }
);

db.sync();

module.exports = Contribution;
