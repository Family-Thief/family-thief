'use strict';

angular.module('familyThiefApp')
  .controller('DashboardCtrl', function ($scope, $http, Auth, HelpRequest, $location) {
    
    // inject data of currently logged-in user into this controller
    $scope.user = Auth.getCurrentUser();
    // array of search results initially set to empty 
    $scope.searchResults = [];
    // define the searchString var
    $scope.searchString;
    
    //search for a project containing the query strings
    $scope.search = function() {
      $http({
        url: "api/helpRequests",
        method: "GET",
        params: {search: $scope.searchString}
      }).success(function(data, status) {
        $scope.searchResults = data;
      });
    };

    // load the help request that gets clicked
    $scope.loadHelpRequest = function(id) {
      Auth.setHelpRequest(id);
      $location.path('/help-request');
    };

    // load the contribution that gets clicked
    $scope.loadContribution = function(id) {
      Auth.setContribution(id);  // sets the id of the contribution that the user is about to view
      $location.path('/contribution');
    };
    
  });
