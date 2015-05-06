'use strict';

angular.module('familyThiefApp')
  .controller('HelpRequestCtrl', function ($scope, $http, User, HelpRequest) {
    $scope.getCurrentUser = User.getCurrentUser;

    $scope.helpRequest = {};

    $scope.respondToHelpRequest = function() {
      
    }


    

  });
