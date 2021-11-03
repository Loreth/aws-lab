import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {getEndpointUrl, LOGGING} from "../../shared/rest-api-urls";
import {Observable} from 'rxjs';
import {LogEntryResponse} from '../../shared/model/logging/logsEntryResponse';
import {DatesRequest} from '../../shared/model/logging/datesRequest';
import {LogEntry} from '../../shared/model/logging/logEntry';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private http: HttpClient) {
  }

  addLogEntry(entry: LogEntry) {
    const url = `${getEndpointUrl(LOGGING)}/log-entry`;

    return this.http.post(url, entry);
  }

  getAllLogs(): Observable<LogEntryResponse[]> {
    const url = `${getEndpointUrl(LOGGING)}/logs`;

    return this.http.get<LogEntryResponse[]>(url);
  }

  getLogsByUsername(username: string): Observable<LogEntryResponse[]> {
    const url = `${getEndpointUrl(LOGGING)}/user/${username}`;

    return this.http.get<LogEntryResponse[]>(url);
  }

  getLogsByDate(start: string, end: string): Observable<LogEntryResponse[]> {
    const url = `${getEndpointUrl(LOGGING)}/dates`;
    const dates: DatesRequest = {start, end}
    return this.http.post<LogEntryResponse[]>(url, dates);
  }

  getLogsByDateAndUsername(start: string, end: string, username: string): Observable<LogEntryResponse[]> {
    const url = `${getEndpointUrl(LOGGING)}/dates/${username}`;
    const dates: DatesRequest = {start, end}
    return this.http.post<LogEntryResponse[]>(url, dates);
  }
}
