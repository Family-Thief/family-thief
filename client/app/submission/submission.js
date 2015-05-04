'use strict';

//add submission state to the app

angular.module('familyThiefApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('submission', {
        url: '/submission',
        templateUrl: 'app/submission/submission.html',
        controller: 'SubmissionCtrl', 
        authenticate: false
      });
  });