import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
//importamos el proveedor que nos permite conectarnos a apis
import { provideHttpClient } from '@angular/common/http';
import routes from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)
,provideHttpClient(), provideAnimationsAsync()]};
