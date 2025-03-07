import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAuth  } from 'angular-auth-oidc-client';
import { authConfig } from './auth/auth.config'; // Importa la config

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([]),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAuth(authConfig),
  ],
};
