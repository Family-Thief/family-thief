'use strict';

angular.module('familyThiefApp')
  .controller('ContributionCtrl', function ($scope, $http, Auth, $location, Contribution) {
    
    // inject data of currently logged-in user into this controller
    $scope.user = Auth.getCurrentUser();
    $scope.contribution = {};
    $scope.contribution.id = Auth.getContribution(); // gets the id of the contribution that is about to be loaded
    $scope.id = Auth.getContribution(); // delete when server is returning the id in getContribution data
    $scope.newCommentText;
    $scope.hasVoted = false;

    $scope.getContributionData = function() {
      Contribution.get({id: $scope.contribution.id}, function(contribution) {
        console.log(contribution);
        $scope.contribution = contribution;
      });
    }

    $scope.getContributionData();

    $scope.addComment = function(form) {
      if(form.$valid) {
        var comment = {
          contributionId: $scope.id,
          commenter: $scope.user.username,
          text: $scope.newCommentText
        };
        Contribution.addComment({}, comment, function(data, status) {
          $scope.contribution.comments.push(comment);
        });
      }
    };
    $scope.upvote = function() {
      if(!$scope.hasVoted) {
        Contribution.upvote({}, {contributionId: $scope.id}, function(data, status) {
          $scope.contribution.votes += 1;
          $scope.hasVoted = true;
        });
      }
    };
    
  });
