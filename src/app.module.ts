import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import * as Material from '@angular/material';
import '@angular/material/prebuilt-themes/indigo-pink.css'
import './styles/style.css'

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        Material.MatCardModule,
        Material.MatButtonModule,
        Material.MatRadioModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}