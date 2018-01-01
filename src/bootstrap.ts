import 'reflect-metadata';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app.module'

console.log('hello');

const module = platformBrowserDynamic().bootstrapModule(AppModule);