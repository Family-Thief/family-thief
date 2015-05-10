'use strict';

angular.module('familyThiefApp')
  .controller('InboxCtrl', function ($scope, $http, Auth, HelpRequest, $location) {
    
    // inject data of currently logged-in user into this controller
    $scope.user = Auth.getCurrentUser();
    // array of results initially set to empty 
    $scope.contributions = [];
    
    //retrieve from database all objects with contributions to user's help requests
    $scope.contribution = function() {
      $http({
        url: "api/contributions/:id",
        method: "GET",
      }).success(function(data, status) {
        console.log(data);
        $scope.contributions.push(data);
      });
    };
    
    $scope.loadHelpRequest = function(id) {
      Auth.setHelpRequest(id);
      $location.path('/help-request');
    };

    $scope.loadContribution = function(id) {
      Auth.setContribution(id);  // sets the id of the contribution that the user is about to view
      $location.path('/contribution');
    };
    
  });