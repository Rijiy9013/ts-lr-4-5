import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const ApiLoggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`HTTP Request: ${req.method} ${req.urlWithParams}`, req);

  return next(req).pipe(
    tap({
      next: (event) => {
        console.log(`HTTP Response from ${req.urlWithParams}:`, event);
      },
      error: (error) => {
        console.error(`HTTP Error from ${req.urlWithParams}:`, error);
      },
    })
  );
};
