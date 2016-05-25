(function () {

    'use strict';

    angular.module('myApp.validate', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/validate', {
                templateUrl: 'validate/validate.html',
                controller: 'validateCtrl'
            });
        }])

        .controller('validateCtrl', [function () {

        }]);
}());