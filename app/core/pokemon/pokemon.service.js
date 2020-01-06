'use strict';


//   angular.module('core.pokemon', [])
//   .controller('Pokemon', function($scope, $http) {
//       $http.get('http://rest-service.guides.spring.io/greeting').
//           then(function(response) {
//               $scope.greeting = response.data;
//           });
//   });

angular.
  module('core.pokemon').
  factory('Pokemon', ['$resource',
    function($resource) {
      return $resource('https://pokeapi.co/api/v2/pokemon?limit=151', {}, {
        query: {
          method: 'GET',
          params: {results: 'name'},
          isArray: false
        }
        
    });
    }
  ]);
