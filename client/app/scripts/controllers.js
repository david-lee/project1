'use strict';

angular.module('project1App')
.controller('HeaderController', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {

    $scope.loggedIn = false;
    $scope.username = '';
    
/*
    if(AuthFactory.isAuthenticated()) {
        $scope.loggedIn = true;
        $scope.username = AuthFactory.getUsername();
    }
        
    $scope.openLogin = function () {
        ngDialog.open({ template: 'views/login.html', scope: $scope, className: 'ngdialog-theme-default', controller:"LoginController" });
    };
    
    $scope.logOut = function() {
       AuthFactory.logout();
        $scope.loggedIn = false;
        $scope.username = '';
    };
    
    $rootScope.$on('login:Successful', function () {
        $scope.loggedIn = AuthFactory.isAuthenticated();
        $scope.username = AuthFactory.getUsername();
    });
        
    $rootScope.$on('registration:Successful', function () {
        $scope.loggedIn = AuthFactory.isAuthenticated();
        $scope.username = AuthFactory.getUsername();
    });
*/
    
    $scope.stateis = function(curstate) {
       return $state.is(curstate);  
    };
    
}])
.controller('HomeController', ['$scope', '$state', '$rootScope','phoneFactory', function ($scope, $state, $rootScope, phoneFactory) {
    phoneFactory.query(
        function (response) {
            $scope.phones = response;

        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
        });
}])
;
