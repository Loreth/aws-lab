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

  private userIp: string | undefined = undefined;

  constructor(private loggingService: LoggingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const url = request.url;

    // if the request is made to the logging API or while asking for IP address,
    // then ignore it - we don't want infinite logging about logging
    if (url.indexOf("logging") === -1) {
      const method = request.method;
      const body = request.body;
      const userId = 1;
      const userName = "username";

      if (this.userIp === undefined) {
        fetch('https://api.ipify.org')
          .then(response => response.text())
          .then(ip => {
            console.log(`fetched ip ${ip}`);

            this.userIp = ip;

            this.loggingService.addLogEntry({ip, url, userId, method, body, userName});
          });
      }
    }

    return next.handle(request);
  }
}
