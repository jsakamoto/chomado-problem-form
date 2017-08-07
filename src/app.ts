import * as angular from 'angular';
import 'angular-hotkeys';
import 'angular-loading-bar';
import '../node_modules/angular-loading-bar/src/loading-bar.css';
import './app.css';

const app = angular.module("app", ['cfp.hotkeys', 'angular-loading-bar']);
app.config(['cfpLoadingBarProvider', cfpLoadingBarProvider => {
    cfpLoadingBarProvider.includeSpinner = false;
}]);

export class ChomadProblemFormController {
    public options: number[];
    public questions: number[];
    public answers: number[];
    public correct_count: number;
    public trial: number;
    public filled: boolean;
    public serverUrl: string;
    public contributors: any;

    constructor(
        hotkeys: ng.hotkeys.HotkeysProvider,
        $scope: ng.IScope,
        private $http: ng.IHttpService
    ) {
        this.serverUrl = "https://chomado-problem-server.azurewebsites.net/"
        this.options = [1, 2, 3, 4];
        this.questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.answers = new Array(this.questions.length);
        this.correct_count = null;
        this.trial = 0;

        hotkeys.bindTo($scope);
        hotkeys.add({
            combo: 's',
            allowIn: ['INPUT'],
            description: "send answer",
            callback: _ => this.sendAnswer()
        });

        $scope.$watch(
            () => this.answers,
            () => {
                this.filled = this.answers.filter(n => n != null).length == this.questions.length;
                this.correct_count = null;
            }, true);

        const contributorsUrl = 'https://api.github.com/repos/jsakamoto/chomado-problem-form/contributors';
        $http.get(contributorsUrl).then(res => {
            this.contributors = res.data;
        });

    }

    public sendAnswer(): void {
        let apiUrl = this.serverUrl + "answer";
        this.$http.post<number>(apiUrl, this.answers)
            .then(res => {
                this.correct_count = res.data;
                this.trial += 1
            });
    }
}

app.controller('chomadProblemFormController', ['hotkeys', '$scope', '$http', ChomadProblemFormController]);
