'use strict';

angular.module('myApp.electronview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/electronview', {
    templateUrl: 'electronview/view2.html',
    controller: 'ElectronviewCtrl'
  });
}])

.controller('ElectronviewCtrl', function() {
  $scope.showDialog = function(name){
    var ipc = require('ipc');
    var counter = 0;

    // increment the progress value by 0.1 every second
    var progress = setInterval(function() {
      if (counter < 1) {
        ipc.send('update-progress', counter);
        counter += 0.1;
      }
      else {
        // reset the progress value to 0;
        ipc.send('update-progress', 0);

        // clear out the set interval
        clearInterval(progress);

        // display a notification saying that we did everything
        new Notification('Progress Test Finished!');
      }
    }, 1000);
  }
});