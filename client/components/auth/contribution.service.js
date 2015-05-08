'use strict';

// this service provides an abstracted interface for working with contributions that we can use in any controller

angular.module('familyThiefApp')
  .factory('Contribution', function ($resource) {
    return $resource('/api/contributions/:id', {
      id: '@id'
    },
    {
      upvote: {
        method: 'POST',
        params: {
          id: 'votes'
        }
      },
      addComment: {
        method: 'POST',
        params: {
          id: 'comments'
        }
      }
    });
  });