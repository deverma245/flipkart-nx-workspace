import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401:
          // Handle authentication expiry
          break;

        case 403:
          // Handle forbidden
          break;

        case 404:
          // Handle not found
          break;

        case 500:
          // Handle server error
          break;
      }

      return throwError(() => error);
    })
  );
};