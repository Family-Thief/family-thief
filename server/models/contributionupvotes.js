var db = require('../config/dbConfig.js');
var Sequelize = require('sequelize');
var User = require('./user.js');
var Contribution = require('./contributions.js');

var ContributionUpvote = db.define('ContributionUpvote',
  {
    upvoter: {
      type: Sequelize.INTEGER,
      references: User,
      referencesKey: "id"
    },
    contributionupvoted: {
      type: Sequelize.INTEGER,
      references: Contribution,
      referencesKey: "id"
    }

  }
);

db.sync();

module.exports = ContributionUpvote;
