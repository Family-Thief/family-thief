var db = require('../config/dbConfig.js');
var Sequelize = require('sequelize');
var User = require('./user.js');
var Contribution = require('./contributions.js');

var ContributionUpvote = db.define('ContributionsUpvote',
  {
    upvoter: Sequelize.INTEGER,
    contributionupvoted: Sequelize.INTEGER

  }
);

db.sync();

module.exports = ContributionUpvote;
