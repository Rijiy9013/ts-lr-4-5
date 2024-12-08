import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors  } from '@angular/common/http';
import { routes } from './app/app.routes';
import { ApiLoggerInterceptor } from './app/interceptors/api-logger.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([ApiLoggerInterceptor])),
  ],
}).catch((err) => console.error(err));
