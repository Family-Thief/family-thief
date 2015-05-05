var db = require('../config/dbConfig.js');
var Sequelize = require('sequelize');


var Contribution = db.define('Contribution',
  {
    helpedUsername:

  }
);

db.sync();

module.exports = Contribution;
