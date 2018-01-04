import 'reflect-metadata';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app.module'

console.log('hello');

if (module.hot) {
    module.hot.accept();
}
const modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);