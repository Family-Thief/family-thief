'use strict';

angular.module('familyThiefApp')
  .controller('AllHelpRequestCtrl', function ($scope, $http, Auth, HelpRequest, $location) {
    
    $scope.user = Auth.getCurrentUser();
    
    $scope.resultList = [];

    $scope.getRecentlySubmitted = function() {
      $http({
        url: "api/helpRequests",
        method: "GET",
      }).success(function(data, status) {
        $scope.resultList = data;
      });
    };
    
       
    $scope.loadHelpRequest = function(id) {
      console.log(id);
      Auth.setHelpRequest(id);
      $location.path('/help-request');
    };
    
    });
