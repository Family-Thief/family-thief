var db = require('../config/dbConfig.js');
var Sequelize = require('sequelize');
var User = require('./user.js');

var Project = db.define('Project',
  {
    title: Sequelize.STRING,
    summary: Sequelize.STRING,
    text: Sequelize.TEXT,
    user_id: Sequelize.INTEGER
  }
);

db.sync();

module.exports = Project;
