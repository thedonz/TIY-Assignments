'use strict';

/**
 * @ngdoc function
 * @name commentsAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the commentsAngularApp
 */
angular.module('commentsAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
