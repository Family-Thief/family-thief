'use strict';

angular.module('familyThiefApp')
  .controller('HelpRequestCtrl', function ($scope, $http, Auth, HelpRequest) {
    $scope.currentUser = Auth.getCurrentUser();
    $scope.helpRequest = {};
    $scope.newContribution = {};
    $scope.helpRequest.id = Auth.getHelpRequest();

    // grabs the appropriate helpRequest data based on property stored in Auth service
    $scope.getHelpRequestData = function() {
      console.log(Auth.getHelpRequest());
      HelpRequest.get({id: $scope.helpRequest.id}, function(helpRequest) {
        $scope.helpRequest = helpRequest;
      });
    }

    $scope.getHelpRequestData();

    $scope.respondToHelpRequest = function() {
      $http.post('/api/contributions', {
        helperUsername: $scope.currentUser.username,
        helpedId: Auth.getHelpRequest(),  // returns the id of the currently viewed help request
        text: $scope.newContribution.text
      })
      .success(function(data, status) {
        console.log(status);
      })
    }


    

  });
