import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoggingService} from "./logging.service";
import {getEndpointUrl, LOGGING} from "../../shared/rest-api-urls";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  private userIp: string | undefined = undefined;

  constructor(private loggingService: LoggingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // if the request is made to the logging API or while asking for IP address,
    // then ignore it - we don't want infinite logging about logging
    if (LoggingInterceptor.requestWasNotMadeToLoggingApi(request)) {
      const url = request.url;
      const method = request.method;
      const body = request.body;
      const userId = 1;
      const userName = "username";

      // for the first request, use an api to read user ip
      if (this.userIp === undefined) {
        fetch('https://api.ipify.org')
          .then(response => response.text())
          .then(ip => {
            this.userIp = ip;

            this.loggingService.addLogEntry({date: new Date(), ip, url, userId, method, body, userName}).subscribe();
          });
      }
      else {
        this.loggingService.addLogEntry({date: new Date(), ip: this.userIp, url, userId, method, body, userName}).subscribe();
      }
    }

    return next.handle(request);
  }

  private static requestWasNotMadeToLoggingApi(request: HttpRequest<unknown>): boolean {
    const requestUrl = request.url;
    const loggingApiUrl = getEndpointUrl(LOGGING);

    return requestUrl.indexOf(loggingApiUrl) === -1;
  }

}
