'use strict';

angular.module('familyThiefApp')
  .controller('SubmissionCtrl', function ($scope, $http, User, HelpRequest) {
    $scope.getCurrentUser = User.getCurrentUser;

    $scope.helpRequest = {};

    $scope.submitHelpRequest = function(isValid) {
      if(isValid) {
        HelpRequest.save({
          title: $scope.helpRequest.title,
          text: $scope.helpRequest.text,
          summary: $scope.helpRequest.summary
        }, function(helpRequest){
          console.log(helpRequest);
        });
      }
    }


    

  });
