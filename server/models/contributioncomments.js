var db = require('../config/dbConfig.js');
var Sequelize = require('sequelize');
var User = require('./user.js');
var Contribution = require('./contributions.js');

var ContributionComment = db.define('ContributionComment',
  {
    comment: Sequelize.STRING,
    unseenComment: Sequelize.BOOLEAN,
    commenter: {
      type: Sequelize.INTEGER,
      references: User,
      referencesKey: "id"
    },
    contributionCommented: {
      type: Sequelize.INTEGER,
      references: Contribution,
      referencesKey: "id"
    }

  }
);

db.sync();

module.exports = ContributionComment;
