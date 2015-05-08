'use strict';

angular.module('familyThiefApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contribution', {
        url: '/contribution',
        templateUrl: 'app/contribution/contribution.html',
        controller: 'ContributionCtrl',
        authenticate: true
      });
  });