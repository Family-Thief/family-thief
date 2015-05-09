'use strict';

angular.module('familyThiefApp')
  .controller('AllHelpRequestCtrl', function ($scope, $http, Auth, HelpRequest, $location) {
    
    // inject data of currently logged-in user into this controller
    $scope.user = Auth.getCurrentUser();
    
    // $scope.searchResults = [{id: 1, title: "A novel", summary: "just help me", origDate: "May 1st 2015"}];
    // //search for a project containing the query strings
    $scope.search = function() {
      $http({
        url: "api/helpRequests/:id",
        method: "GET",
        /*params: {search: $scope.searchString}*/
      }).success(function(data, status) {
        $scope.searchResults = resultArray;
      });
    };
    
       
    $scope.loadHelpRequest = function(id) {
      console.log(id);
      Auth.setHelpRequest(id);
      $location.path('/help-request');
    };
    
    $scope.getRecentlySubmitted = function (){

    }
  });
