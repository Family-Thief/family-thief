'use strict';

angular.module('familyThiefApp')
  .controller('DashboardCtrl', function ($scope, $http, Auth) {

    $scope.username = 'Craig';
    
    $scope.user = Auth.getCurrentUser();

    $scope.helpRequests = [{title:'the long road to nowhere', text:'', comments:''},
                          {title: 'the prodigal son', text:'', comments:''},
                          {title: 'the broken family', text:'', comments:''}];
    
    $scope.contributions = [{submitter:'John Doe', title:'Superiority Complex'},
                            {submitter: 'Liz Penny', title: 'Meow Meow Meow'}];

    $scope.helpFromOthers = [{submitter: 'Adam Van Antwerp', title: 'Portland or Bust'},
                                  {submitter: 'Brandon Ellis', title: 'The Life of Yinz'}];

    $scope.commentsFromOthers = ['hey, loved your piece!....','Great Work! Small suggestion....' ];

    $scope.searchResults = [{id: 212, title:"Adventures of Huck Finn", summary:"A story about Huck Finn", origDate: "May 1st, 2015"}];

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

  // $scope.username = $scope.user.username;

 //  $scope.contributions = $scope.user.contributions;

 //  $scope.unseenHelpFromOthers = $scope.user.helpFromOthers.length;

 //  $scope.unseenCommentsFromOthers = $scope.user.commentsFromOthers.length;
    
  });
