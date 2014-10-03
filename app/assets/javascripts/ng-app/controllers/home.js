angular.module('AngularRails')
    .controller('HomeCtrl', function ($scope) {
        $scope.things = ['Angular', 'Rails 4.1', 'Working', 'Together!!'];
    });

angular.module('myApp')
    .controller('HomeCtrl', function ($scope) {
        $scope.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
    });