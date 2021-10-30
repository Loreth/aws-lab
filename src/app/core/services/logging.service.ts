import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {getEndpointUrl, LOGGING} from "../../shared/rest-api-urls";

export interface LogEntry {
  readonly date: Date;
  readonly ip: string;
  readonly url: string;
  readonly method: string;
  readonly body: any;
}

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private http: HttpClient) { }

  addLogEntry(entry: LogEntry) {
    const url = `${getEndpointUrl(LOGGING)}/log-entry`;

    return this.http.post(url, entry);
  }
}
