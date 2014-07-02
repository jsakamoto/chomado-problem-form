/// <reference path="typings/angularjs/angular.d.ts" />
var app = angular.module("app", []);

interface IScope extends ng.IScope {
    options: number[];
    questions: number[];
    answers: number[];
    correct_count: number;

    filled: boolean;

    sendAnswer: () => void;
}

app.controller("hello", ($scope: IScope, $http: ng.IHttpService) => {
    $scope.options = [1, 2, 3, 4];
    $scope.questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.answers = new Array($scope.questions.length);
    $scope.correct_count = null;

    $scope.$watch(
        scope => JSON.stringify((<IScope>scope).answers),
        () => {
            $scope.filled = $scope.answers.filter(n => n != null).length == $scope.questions.length;
            $scope.correct_count = null;
        });

    $scope.sendAnswer = () => {
        $http.post(
        //"http://chomado-problem-server.apphb.com/answer",
            "http://localhost:52328/answer",
            //"http://chomado-problem-server.azurewebsites.net/answer",
            $scope.answers,
            { headers: { "content-type": "application/json" } }
            ).success(count => {
                $scope.correct_count = <number>count;
            });
    };
});