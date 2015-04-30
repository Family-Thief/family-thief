var db = require('../config/dbConfig.js');
var Sequelize = require('sequelize');
var bcrypt = require('bcrypt-nodejs');

var User = db.define('User', 
  {
    
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING

  },

  {
    instanceMethods: {

      encryptPassword : function(newPassword, callback) {
        var self = this;
        bcrypt.hash(newPassword, null, null, function(err, hash){
          if (!err) {
            self.update({password: hash}).then(callback);
          }
        });
      },

      authenticate: function(attemptedPassword) {
        return bcrypt.compareSync(attemptedPassword, this.get('password'));
      }
    }
  }

);

db.sync();

module.exports = User;
