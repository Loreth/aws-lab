import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Bucket} from "../../../shared/model/bucket";
import {BucketService} from "../../../core/services/bucket.service";

@Component({
  selector: 'app-bucket-picker',
  templateUrl: './bucket-picker.component.html',
  styleUrls: ['./bucket-picker.component.css']
})
export class BucketPickerComponent implements OnInit {
  buckets$!: Observable<Bucket[]>;

  constructor(private bucketService: BucketService) {
  }

  ngOnInit(): void {
    this.buckets$ = this.bucketService.getBuckets();
  }
}
