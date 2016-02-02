'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
$scope.showDialog = function(name){
  var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui() (see https://github.com/rogerwang/node-webkit/issues/707)
// Get the current window
  var win = gui.Window.get();

  var new_win = gui.Window.open('dialog/dialog1.html');

// And listen to new window's focus event
  new_win.on('focus', function() {
    console.log('New window is focused');
  });
}
});