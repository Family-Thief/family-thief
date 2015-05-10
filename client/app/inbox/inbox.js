'use strict';

angular.module('familyThiefApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('inbox', {
        url: '/inbox',
        templateUrl: 'app/inbox/inbox.html',
        controller: 'InboxCtrl',
        authenticate: true
      });
  });