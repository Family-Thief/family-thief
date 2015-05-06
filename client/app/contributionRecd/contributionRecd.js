'use strict';

//add contributionRecd state to the app

angular.module('familyThiefApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contributionRecd', {
        url: '/contributionRecd',
        templateUrl: 'app/contributionRecd/contributionRecd.html',
        controller: 'ContributionRecdCtrl', 
        authenticate: false
      });
  });