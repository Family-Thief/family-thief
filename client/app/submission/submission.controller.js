'use strict';

angular.module('familyThiefApp')
  .controller('SubmissionCtrl', function ($scope, $http, User, HelpRequest) {
    $scope.getCurrentUser = User.getCurrentUser;

    $scope.helpRequest = {};

    $scope.submitHelpRequest = function() {
      
    }


    

  });
