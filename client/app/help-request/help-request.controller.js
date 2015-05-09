'use strict';

angular.module('familyThiefApp')
  .controller('HelpRequestCtrl', function ($scope, $http, Auth, HelpRequest, $location) {
    $scope.currentUser = Auth.getCurrentUser();
    $scope.helpRequest = {};
    $scope.newContribution = {};
    $scope.helpRequest.id = Auth.getHelpRequest();
    $scope.hasVoted = false;

    // grabs the appropriate helpRequest data based on property stored in Auth service
    $scope.getHelpRequestData = function() {
      HelpRequest.get({id: $scope.helpRequest.id}, function(helpRequest) {
        console.log(helpRequest);
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
        console.log(data);
      })
    };

    $scope.loadContribution = function(id) {
      Auth.setContribution(id);  // sets the id of the contribution that the user is about to view
      $location.path('/contribution');
    };

    $scope.upvote = function() {
      if(!$scope.hasVoted) {
        HelpRequest.upvote({}, {contributionId: $scope.id}, function(data, status) {
          $scope.helpRequest.votes += 1;
          $scope.hasVoted = true;
        });
      }
    }


    

  });
