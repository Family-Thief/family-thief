var db = require('../config/dbConfig.js');
var Sequelize = require('sequelize');
var User = require('./user.js');

var Project = db.define('Project',
  {
    title: Sequelize.STRING,
    summary: Sequelize.STRING,
    text: Sequelize.TEXT,
    user_id: {
      type: Sequelize.INTEGER,
      references: User,
      referencesKey: "id"
    }
  }
);

db.sync();

module.exports = Project;
