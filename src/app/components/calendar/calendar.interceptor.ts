import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { BookingService, CalendarService } from 'src/app/services';

@Injectable({ providedIn: 'root' })
export class CalendarInterceptor implements HttpInterceptor {

  constructor(
    public cs: CalendarService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const rbd = req.body;
    // if (req.body){
    this.cs.show()
    // }

    // console.log(req, next);
    // return next.handle(req);
    return next.handle(req)
      .pipe(
        finalize(() => {
          this.cs.hide()
          console.log(req.body)
        }
        ));
  }
}