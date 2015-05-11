'use strict';

angular.module('familyThiefApp')
  .controller('AllHelpRequestCtrl', function ($scope, $http, Auth, HelpRequest, $location) {
    
    $scope.user = Auth.getCurrentUser();
    
    $scope.resultList = [];
    $scope.searchString;
    
    //search for a project containing the query strings
    $scope.search = function() {
      $http({
        url: "api/helpRequests",
        method: "GET",
        params: {search: $scope.searchString}
      }).success(function(data, status) {
        console.log(data);
        $scope.resultList = data;
      });
    };

    $scope.getRecentlySubmitted = function() {
      $http({
        url: "api/allHelpRequests",
        method: "GET",
      }).success(function(data, status) {
        $scope.resultList = data;
      });
    };
    
    $scope.getRecentlySubmitted();
       
    $scope.loadHelpRequest = function(id) {
      Auth.setHelpRequest(id);
      $location.path('/help-request');
    };
    
    });


  
