/**
 * Created by Zaher on 11/9/2016.
 */
(function () {
    var app = angular.module('store', []);
    app.controller('HelloWordCtrl', ["$scope",
        function ($scope) {
            $scope.helloMessage = "HelloWord";
        }]);
})();
