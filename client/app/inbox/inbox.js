'use strict';

angular.module('familyThiefApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('inbox', {
        url: '/',
        templateUrl: 'app/inbox/inbox.html',
        controller: 'InboxCtrl'
      });
  });