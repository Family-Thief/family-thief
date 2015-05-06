'use strict';

angular.module('familyThiefApp')
  .controller('ContributionRecdCtrl', function ($scope, $http, User, HelpRequest) {
    $scope.getCurrentUser = User.getCurrentUser;

    $scope.helpRequest = {};

    $scope.respondToHelpRequest = function() {
      
    }


    

  });
