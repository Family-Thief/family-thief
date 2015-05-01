'use strict';

angular.module('familyThiefApp')
  .controller('DashboardCtrl', function ($scope, $http, Auth) {
    $scope.awesomeThings = [];
    
    $scope.getCurrentUser = Auth.getCurrentUser;

    // $scope.username = $scope.getCurrentUser().username;
	$scope.username = 'Brandon';
	    
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
