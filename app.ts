/// <reference path="typings/angularjs/angular.d.ts" />
var app = angular.module("app", ['angular-loading-bar']);
app.config(['cfpLoadingBarProvider', cfpLoadingBarProvider => {
    cfpLoadingBarProvider.includeSpinner = false;
}]);

interface IScope extends ng.IScope {
    options: number[];
    questions: number[];
    answers: number[];
    correct_count: number;
    trial: number;
    filled: boolean;
    serverUrl: string;
    contributors: any;

    sendAnswer: () => void;
}

app.controller("chomadoProblemForm",($scope: IScope, $http: ng.IHttpService) => {
    //$scope.serverUrl = "http://localhost:52328/",
    //$scope.serverUrl = "https://chomado-problem-server.apphb.com/";
    $scope.serverUrl = "https://chomado-problem-server.azurewebsites.net/"
    $scope.options = [1, 2, 3, 4];
    $scope.questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.answers = new Array($scope.questions.length);
    $scope.correct_count = null;
    $scope.trial = 0

    $scope.$watch(
        scope => JSON.stringify((<IScope>scope).answers),
        () => {
            $scope.filled = $scope.answers.filter(n => n != null).length == $scope.questions.length;
            $scope.correct_count = null;
        });

    $scope.sendAnswer = () => {
        var apiUrl = $scope.serverUrl + "answer";
        $http.post(apiUrl, $scope.answers)
            .success(count => {
            $scope.correct_count = <number>count;
            $scope.trial += 1
        });
    };

    var contributorsUrl = 'https://api.github.com/repos/jsakamoto/chomado-problem-form/contributors';
    $http.get(contributorsUrl).success(contributors=> {
        $scope.contributors = contributors;
    });

});
