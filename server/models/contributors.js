// var db = require('../config/dbConfig.js');
// var Sequelize = require('sequelize');
// var bcrypt = require('bcrypt-nodejs');

// exports.User = db.define('User',
//   {

//     username: Sequelize.STRING,
//     email: Sequelize.STRING,
//     password: Sequelize.STRING


//   },

//   {
//     instanceMethods: {

//       setPassword : function(newPassword, callback) {
//         var self = this;
//         bcrypt.hash(newPassword, null, null, function(err, hash){
//           if (!err) {
//             self.update({password: hash}).then(callback);
//           }
//         });
//       },

//       checkPassword: function(attemptedPassword) {
//         return bcrypt.compareSync(attemptedPassword, this.get('password'));
//       }
//     }
//   }

// );

// exports.Project = db.define('Project',
//   {
//     title: Sequelize.STRING,
//     summary: Sequelize.STRING,
//     text: Sequelize.TEXT
//   }
// );

// // exports.UserProject = db.define('UserProject', 
// // {
// //   userid: {
// //     type: Sequelize.INTEGER,
// //     references: "User",
// //     referencesKey: "id"
// //   },
// //   projectid: {
// //     type: Sequelize.INTEGER,
// //     references: "Project",
// //     referencesKey: "id"
// //   }

// // }
// // );

// exports.Project.hasMany(exports.User, {through: 'UserProject'});
// exports.User.hasMany(exports.Project, {through: 'UserProject'});

// db.sync();

// // module.exports = User;
