(function () {
  'use strict';

  angular.module('newCircleApp.controllers')
    .controller('newCircleCtrl', ['$scope', function($scope){
	  $scope.selectedCircle = {"path":"/dataFiles/poolserver.json", "desc":"按服务器数量，面积表示Server数目"};
	  $scope.circles={
		  "pool_server":{"path":"/dataFiles/poolserver.json", "desc":"按服务器数量，面积表示Server数目"},
		  "pool_apptype":{"path":"/dataFiles/apptype.json", "desc":"按应用类型，面积表示Pool数目"},
		  "pool_appenv":{"path":"/dataFiles/appenv.json", "desc":"按应用容器，面积表示Pool数目"}
		  };
    }]);
	
}());
