'use strict';

angular.module('familyThiefApp')
  .controller('HelpRequestCtrl', function ($scope, $http, Auth, HelpRequest) {
    $scope.currentUser = Auth.getCurrentUser();
    $scope.helpRequest = {};

    // grabs the appropriate helpRequest data based on property stored in Auth service
    $scope.getHelpRequestData = function() {
      console.log(Auth.getHelpRequest());
      HelpRequest.get({id: Auth.getHelpRequest()}, function(helpRequest) {
        $scope.helpRequest = helpRequest;
      });
    }

    $scope.getHelpRequestData();


    $scope.respondToHelpRequest = function() {
      
    }


    

  });
