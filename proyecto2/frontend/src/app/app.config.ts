import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideAnimations} from "@angular/platform-browser/animations"
import { routes } from './app.routes';
import {provideToastr} from "ngx-toastr"
import { provideHttpClient } from '@angular/common/http';
export const appConfig: ApplicationConfig = {

  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     
     // animacion de mensajes
     provideAnimations(),provideToastr(),
     
     // peticiones
     provideHttpClient()]
};
