'use strict';

angular.module('familyThiefApp')
  .controller('LoginCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          username: $scope.user.username,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to user's dashboard
          $location.path('/dashboard');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
