import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoggingService} from "./logging.service";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(private loggingService: LoggingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const url = request.url;

    // if the request is made to the logging API or while asking for IP address, then ignore it - we don't want infinite logging about logging
    if (url.indexOf("logging") === -1) {
      const method = request.method;
      const body = request.body;
      const ip = "127.0.0.1"; //from(fetch('https://api.ipify.org').then(response => response.json()));
      const userId = 1;
      const userName = "username";

      console.log(request);
      this.loggingService.addLogEntry({ ip, url, userId, method, body, userName });
    }

    return next.handle(request);
  }
}
