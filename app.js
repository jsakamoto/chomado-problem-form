/// <reference path="typings/angularjs/angular.d.ts" />
var app = angular.module("app", []);

app.controller("chomadoProblemForm", function ($scope, $http) {
    //$scope.serverUrl = "http://localhost:52328/",
    $scope.serverUrl = "https://chomado-problem-server.apphb.com/";

    //$scope.serverUrl = "https://chomado-problem-server.azurewebsites.net/"
    $scope.options = [1, 2, 3, 4];
    $scope.questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.answers = new Array($scope.questions.length);
    $scope.correct_count = null;

    $scope.$watch(function (scope) {
        return JSON.stringify(scope.answers);
    }, function () {
        $scope.filled = $scope.answers.filter(function (n) {
            return n != null;
        }).length == $scope.questions.length;
        $scope.correct_count = null;
    });

    $scope.sendAnswer = function () {
        var apiUrl = $scope.serverUrl + "answer";
        $http.post(apiUrl, $scope.answers).success(function (count) {
            $scope.correct_count = count;
        });
    };
});
//# sourceMappingURL=app.js.map
