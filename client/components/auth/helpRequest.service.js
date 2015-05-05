'use strict';

// this service provides an abstracted interface for working with helpRequests that we can use in any controller

angular.module('familyThiefApp')
  .factory('HelpRequest', function ($resource) {
    return $resource('/api/helpRequests', {
    },
    {
      
    });
  });