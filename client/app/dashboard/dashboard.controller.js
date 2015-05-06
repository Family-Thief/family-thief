'use strict';

angular.module('familyThiefApp')
  .controller('DashboardCtrl', function ($scope, $http, Auth) {
    
    // inject data of currently logged-in user into this controller
    $scope.user = Auth.getCurrentUser();

    //search for a project containing the query strings
    $scope.search = function() {
      $http({
        url: "api/helpRequests",
        method: "GET",
        params: {search: $scope.searchString}
      }).success(function(data, status) {
        console.log(data);
        console.log("hey");
        $scope.searchResults = resultArray;
      });
    };
    
    $scope.loadHelpRequest = function(id) {

    }
    
  });
