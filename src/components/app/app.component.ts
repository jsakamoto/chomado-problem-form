import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {

    serverUrl = 'https://chomado-problem-server.azurewebsites.net/';

    options = [1, 2, 3, 4];

    questions: { number: number, answer: number | null }[];

    correct_count: number | null = null;

    trial = 0;

    get filled(): boolean { return this.questions.every(q => q.answer !== null); }

    constructor(
        private http: HttpClient
    ) {
        this.questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => ({ number, answer: null }));
    }

    async sendAnswer(): Promise<void> {
        let answers = this.questions.map(q => q.answer);

        const apiUrl = this.serverUrl + "answer";
        this.correct_count = await this.http.post<number>(apiUrl, answers).toPromise();
        this.trial += 1
        console.log({ correct_count: this.correct_count, trial: this.trial })
    }
}