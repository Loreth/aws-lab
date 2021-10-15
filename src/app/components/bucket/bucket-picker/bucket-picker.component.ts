import {Component, OnInit} from '@angular/core';
import {ListBucketsCommandOutput, S3} from "@aws-sdk/client-s3"
import {from, Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {fromIni} from "@aws-sdk/credential-providers";

@Component({
  selector: 'app-bucket-picker',
  templateUrl: './bucket-picker.component.html',
  styleUrls: ['./bucket-picker.component.css']
})
export class BucketPickerComponent implements OnInit {
  s3 = new S3({region: "us-east-1", credentials: fromIni()});
  buckets$: Observable<ListBucketsCommandOutput>;

  constructor() {
    this.buckets$ = from(this.s3.listBuckets({})).pipe(tap(bucket => console.log(bucket)))
  }

  ngOnInit(): void {
  }
}
