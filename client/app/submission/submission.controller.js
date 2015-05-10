'use strict';

angular.module('familyThiefApp')
  .controller('SubmissionCtrl', function ($scope, $http, Auth, HelpRequest) {
    $scope.currentUser = Auth.getCurrentUser();

    $scope.helpRequest = {};

    $scope.submitHelpRequest = function(isValid) {
      if(isValid) {
        HelpRequest.save({
          title: $scope.helpRequest.title,
          text: $scope.helpRequest.text,
          summary: $scope.helpRequest.summary
        }, function(helpRequest){
          $scope.currentUser.helpRequests.push(helpRequest);
        });
      }
    }


    

  });
