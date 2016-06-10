'use strict';

angular.module('confusionApp')
.controller('MenuController',['$scope','menuFactory', function($scope, menuFactory){
		//$scope.dishes = menuFactory.getDishes();
		$scope.dishes = [];
		menuFactory.getDishes()
		.then(
			function(response) {
				$scope.dishes = response.data;
			},
         		function (response) {
                      		$scope.message = "Error: " + response.status + " " + response.statusText;
                      	}
		);
	
}])
;
