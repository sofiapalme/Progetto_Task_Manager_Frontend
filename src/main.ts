import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

// Debug per verificare che le route siano caricate
console.log('🔍 Routes loaded:', routes);
console.log('🔍 Routes type:', typeof routes);
console.log('🔍 Routes length:', routes.length);

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error('Bootstrap error:', err));