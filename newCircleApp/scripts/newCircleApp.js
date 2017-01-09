(function () {
  'use strict';

  // create the angular app
  angular.module('newCircleApp', [
    'newCircleApp.controllers',
    'newCircleApp.directives',
	'ui.bootstrap'
    ]);

  // setup dependency injection
  angular.module('d3', []);
  angular.module('newCircleApp.controllers', []);
  angular.module('newCircleApp.directives', ['d3']);
 

}());