'use strict';

angular.module('familyThiefApp')
  .controller('AllHelpRequestCtrl', function ($scope, $http, Auth, HelpRequest, $location) {
    
    $scope.user = Auth.getCurrentUser();
    
    $scope.resultList = [];
    $scope.searchResults = [];
    $scope.searchString;
    
    //search for a project containing the query strings
    $scope.search = function() {
      $http({
        url: "api/helpRequests",
        method: "GET",
        params: {search: $scope.searchString}
      }).success(function(data, status) {
        console.log(data);
        $scope.searchResults = data;
      });
    };

    $scope.getRecentlySubmitted = function() {
      $http({
        url: "api/allHelpRequests",
        method: "GET",
      }).success(function(data, status) {
        console.log(data);
        $scope.resultList = data;
      });
    };
    
    $scope.getRecentlySubmitted();
       
    $scope.loadHelpRequest = function(id) {
      console.log(id);
      Auth.setHelpRequest(id);
      $location.path('/help-request');
    };
    
    });

  //$scope.upvote = function() {
    //$http({
      //url: "api/helpRequest/votes",
      //method: POST,
  
