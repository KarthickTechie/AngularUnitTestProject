import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding,withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { logInterceptor } from './interceptors/log.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes,withComponentInputBinding(),withRouterConfig({
    paramsInheritanceStrategy:'always'
  })),
provideHttpClient(withInterceptors([logInterceptor])), provideAnimationsAsync()
]
};
