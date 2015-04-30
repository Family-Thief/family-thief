'use strict';

angular.module('idiomologyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .state('my-idioms', {
        url: '/my-idioms',
        templateUrl: 'app/account/my-idioms/my-idioms.html',
        controller: 'MyIdiomsCtrl',
        authenticate: true
      })
      .state('add-idiom', {
        url: '/add-idiom',
        templateUrl: 'app/account/add-idiom/add-idiom.html',
        controller: 'AddIdiomCtrl',
        authenticate: true
      });
  });