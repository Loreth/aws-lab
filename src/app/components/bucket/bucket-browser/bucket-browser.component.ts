import {Component} from '@angular/core';
import {Bucket} from "../../../shared/model/s3/bucket";
import {S3Object} from "../../../shared/model/s3/s3Object";
import {from, Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {BucketService} from "../../../core/services/bucket.service";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-bucket-browser',
  templateUrl: './bucket-browser.component.html',
  styleUrls: ['./bucket-browser.component.css']
})
export class BucketBrowserComponent {
  displayedColumns: string[] = ['no', 'key', 'size', 'lastModified', 'download'];
  selectedBucket!: Bucket;
  s3Objects$: Observable<S3Object[]> = from([]);

  constructor(private bucketService: BucketService) {
  }

  onBucketSelected(bucket: Bucket) {
    this.selectedBucket = bucket
    this.s3Objects$ = this.bucketService.getS3Objects(bucket.name);
  }

  makeS3ObjectLink(s3Object: S3Object): string {
    return `https://${this.selectedBucket.name}.s3.amazonaws.com/${s3Object.key}`
  }

  // onS3ObjectClicked(s3Object: S3Object) {
  //   this.selectedS3Objects.toggle(s3Object);
  // }
}
