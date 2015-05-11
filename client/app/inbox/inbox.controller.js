'use strict';

angular.module('familyThiefApp')
  .controller('InboxCtrl', function ($scope, $http, Auth, HelpRequest, $location) {
    
    // inject data of currently logged-in user into this controller
    $scope.user = Auth.getCurrentUser();
    // array of results initially set to empty 
    $scope.contributions = [];
    
    //retrieve from database all objects with contributions to user's help request(s)
    $scope.contribution = function() {
      $http({
        url: "api/mailbox",
        method: "GET",
      }).success(function(data, status) {
        console.log(data);
        $scope.contributions = data;
      });
    };
    $scope.contribution();
    
    //loads contribution in new view when clicked
    $scope.loadContribution = function(id, unseen) {
      Auth.setContribution(id);  // sets the id of the contribution that the user is about to view
      if(unseen) {
        // update the data of the current user's session
        $scope.user.numberUnseenHelps -= 1;
      }
      $location.path('/contribution');
    };
    
  });