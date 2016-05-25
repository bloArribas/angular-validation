(function () {

    'use strict';

// Declare app level module which depends on views, and components
    angular.module('myApp', [
        'ngRoute',
        'myApp.validate',
        'myApp.view2',
        'myApp.version',
        'ngMessages',
        'ngAnimate'
        
    ]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/validate'});
    }]);

}())