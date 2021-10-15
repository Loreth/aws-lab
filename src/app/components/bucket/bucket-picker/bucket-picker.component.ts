import {Component, OnInit} from '@angular/core';
import {from, Observable} from "rxjs";

@Component({
  selector: 'app-bucket-picker',
  templateUrl: './bucket-picker.component.html',
  styleUrls: ['./bucket-picker.component.css']
})
export class BucketPickerComponent implements OnInit {
  buckets$: Observable<any>;

  constructor() {
    this.buckets$ = from([])
  }

  ngOnInit(): void {
  }
}
