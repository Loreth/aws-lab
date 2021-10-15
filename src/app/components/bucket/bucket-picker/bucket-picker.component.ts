import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Bucket} from "../../../shared/model/bucket";
import {BucketService} from "../../../core/services/bucket.service";

@Component({
  selector: 'app-bucket-picker',
  templateUrl: './bucket-picker.component.html',
  styleUrls: ['./bucket-picker.component.css']
})
export class BucketPickerComponent implements OnInit {
  displayedColumns: string[] = ['no', 'name', 'creationDate'];
  buckets$!: Observable<Bucket[]>;
  @Output() selectedBucket = new EventEmitter<Bucket>();
  highlightedBucketName = '';

  constructor(private bucketService: BucketService) {
  }

  ngOnInit(): void {
    this.buckets$ = this.bucketService.getBuckets();
  }

  onSelectBucket(bucket: Bucket) {
    this.highlightedBucketName = bucket.name
    this.selectedBucket.emit(bucket);
  }
}
