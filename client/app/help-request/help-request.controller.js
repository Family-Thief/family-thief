'use strict';

angular.module('familyThiefApp')
  .controller('HelpRequestCtrl', function ($scope, $http, Auth, HelpRequest, $location) {
    $scope.currentUser = Auth.getCurrentUser();
    $scope.helpRequest = {};
    $scope.newContribution = {};
    $scope.helpRequest.id = Auth.getHelpRequest();
    $scope.hasVoted = false;

    console.log($scope.currentUser);

    // grabs the appropriate helpRequest data based on property stored in Auth service
    $scope.getHelpRequestData = function() {
      HelpRequest.get({id: $scope.helpRequest.id}, function(helpRequest) {
        console.log(helpRequest);
        $scope.helpRequest = helpRequest;
      });
    }

    $scope.getHelpRequestData();

    $scope.respondToHelpRequest = function() {
      var contribText = $scope.newContribution.text;
      $http.post('/api/contributions', {
        helperUsername: $scope.currentUser.username,
        helpedId: Auth.getHelpRequest(),  // returns the id of the currently viewed help request
        text: $scope.newContribution.text
      })
      .success(function(data, status) {
        // make this new data display in this view
        $scope.helpRequest.contributions.push({
          helperUsername: $scope.currentUser.username, // username of contributor
          id: data.id,
          textSnippet: contribText,
          username: $scope.helpRequest.username, // owner of help request
          origDate: data.origDate
        });
        $scope.currentUser.contributions.push({
          id: data.id,
          textSnippet: contribText,
          helperUsername: $scope.currentUser.username,
          origDate: data.origDate
        })
        // make this new data display in the dashboard
      })
    };

    $scope.loadContribution = function(id) {
      Auth.setContribution(id);  // sets the id of the contribution that the user is about to view
      $location.path('/contribution');
    };

    $scope.upvote = function() {
      if(!$scope.hasVoted) {
        $http.post("api/helpRequests/votes", {
          helpRequestId: Auth.getHelpRequest()
        })
        .success(function(data, status) {
          $scope.currentUser.votes += 1;
          $scope.helpRequest.votes += 1;
        });
      }
    }


    

  });
