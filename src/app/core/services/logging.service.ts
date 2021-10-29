import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface LogEntry {
  readonly ip: string;
  readonly url: string;
  readonly method: string;
  readonly body: any;
  readonly userId: number;
  readonly userName: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private http: HttpClient) { }

  addLogEntry(entry: LogEntry) {
    // this.http.post()
    console.log(entry);
  }
}
