import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import {
  authInterceptor,
  errorInterceptor
} from './interceptors';

export const provideAppHttp = () =>
  provideHttpClient(
    withInterceptors([
      authInterceptor,
      errorInterceptor,
    ])
  );