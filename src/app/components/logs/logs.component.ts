import {Component, OnInit} from '@angular/core';
import {LoggingService} from '../../core/services/logging.service';
import {FormControl, FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {LogEntryResponse} from '../../shared/model/logging/logsEntryResponse';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: LogEntryResponse[] = [];
  displayedColumns: string[] = ['username', 'method', 'url', 'ip', 'date'];
  username: string = '';
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private loggingService: LoggingService, private datepipe: DatePipe) {
  }

  ngOnInit(): void {
    this.loggingService.getAllLogs().subscribe(r => {
      this.logs = r;
    })
  }

  filter() {
    const start = this.datepipe.transform(this.range.value.start, 'yyyy-MM-dd\'T\'HH:mm:ss.SSSZ');
    const end = this.datepipe.transform(this.range.value.end, 'yyyy-MM-dd\'T\'HH:mm:ss.SSSZ');
    if (this.username != '') {
      this.loggingService.getLogsByDateAndUsername(start!, end!, this.username).subscribe(r => this.logs = r)
    } else this.loggingService.getLogsByDate(start!, end!).subscribe(r => this.logs = r)
  }

  filterUsernames() {
    this.loggingService.getLogsByUsername(this.username).subscribe(r => this.logs = r)
  }
}
