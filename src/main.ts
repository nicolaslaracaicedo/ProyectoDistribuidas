import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { authConfig } from './app/auth/auth.config';
import { provideAuth } from 'angular-auth-oidc-client';



bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideAuth(authConfig)], 
}).catch(err => console.error(err));
