'use strict';

angular.
  module('pokemonApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/pokemon-list', {
          template: '<pokemon-list></pokemon-list>'
        }).
        otherwise('/pokemon-list');
    }
  ]);
