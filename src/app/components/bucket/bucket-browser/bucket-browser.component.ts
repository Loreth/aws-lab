import {Component} from '@angular/core';
import {Bucket} from "../../../shared/model/bucket";
import {S3Object} from "../../../shared/model/s3Object";
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
  displayedColumns: string[] = ['selected', 'no', 'key', 'size', 'lastModified'];
  selectedBucket!: Bucket;
  s3Objects$: Observable<S3Object[]> = from([]);
  s3ObjectsCount = 0;
  selectedS3Objects = new SelectionModel<S3Object>(true, []);

  constructor(private bucketService: BucketService) {
  }

  areAllRowsSelected() {
    const selectedObjectsCount = this.selectedS3Objects.selected.length;
    return selectedObjectsCount === this.s3ObjectsCount;
  }

  masterSelectionToggle(s3Objects: S3Object[]) {
    if (this.areAllRowsSelected()) {
      this.selectedS3Objects.clear();
      return;
    }

    this.selectedS3Objects.select(...s3Objects);
  }

  onBucketSelected(bucket: Bucket) {
    this.selectedBucket = bucket
    this.s3Objects$ = this.bucketService.getS3Objects(bucket.name).pipe(
      tap(s3Objects => this.s3ObjectsCount = s3Objects.length)
    );
  }

  onS3ObjectClicked(s3Object: S3Object) {
    this.selectedS3Objects.toggle(s3Object);
  }
}
