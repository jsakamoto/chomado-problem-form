import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css']
})
export class FooterComponent {

    contributors: any;

    constructor(
        private http: HttpClient
    ) {
        this.fetchContributors();
    }

    private async fetchContributors(): Promise<void> {
        const contributorsUrl = 'https://api.github.com/repos/jsakamoto/chomado-problem-form/contributors';
        this.contributors = await this.http.get(contributorsUrl).toPromise();
    }
}