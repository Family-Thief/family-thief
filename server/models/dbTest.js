var User = require('./users.js');
var readline = require('readline');

console.log("Welcome to the command line utility to manage users\n");
console.log("Type '1' to add a new admin user, '0' to exit\n");


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var getPass = function(username) {
  rl.question("What would you like the password to be?", function(pass) {
    User.create({username: username}).then(function(newUser){
      newUser.encryptPassword(pass);
      console.log("closing in 5 seconds");
      setTimeout(function(){
        process.exit(0);
      }, 5000);
    });
  });
};

var getUser = function() {
  rl.question("What would you like the user name to be?", function(un){
    getPass(un);
  });
};

rl.question("Put in your choice", function(choice){
  if (choice === '1') {
    getUser();
  } else {
    process.exit(0);
  }
});
