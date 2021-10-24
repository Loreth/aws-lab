import {Component, OnInit} from '@angular/core';
import {Bucket} from '../../../shared/model/s3/bucket';
import {tap} from 'rxjs/operators';
import {from, Observable} from 'rxjs';
import {S3Object} from '../../../shared/model/s3/s3Object';
import {BucketService} from '../../../core/services/bucket.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-bucket-archive',
  templateUrl: './bucket-archive.component.html',
  styleUrls: ['./bucket-archive.component.css']
})
export class BucketArchiveComponent implements OnInit {
  selectedBucket!: Bucket;
  s3Objects$: Observable<S3Object[]> = from([]);
  s3ObjectsCount = 0;
  filesToUpload: File[] = [];
  filesTypes: string[] = [];
  filesByType: File[][] = [];
  files: []=[];

  constructor(private bucketService: BucketService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onBucketSelected(bucket: Bucket) {
    this.selectedBucket = bucket
    this.s3Objects$ = this.bucketService.getS3Objects(bucket.name).pipe(
      tap(s3Objects => this.s3ObjectsCount = s3Objects.length)
    );
  }

  onFileSelected(event: any) {
    this.filesTypes = [];
    this.filesByType = [];
    if (event.target.files.length > 0) {
      this.filesToUpload = Array.from(event.target.files);
      this.filesToUpload.forEach(f => {
        const type = f.type.split("/")[0];
        if (!this.filesTypes.includes(type)) {
          this.filesTypes.push(type);
          this.filesByType.push(this.filesToUpload.filter(fi => fi.type.split("/")[0] == type))
        }
      });
    }
  }

  saveFiles() {
    this.bucketService.postS3Objects(this.selectedBucket.name, this.filesToUpload).subscribe(r => {
      console.log("win")
      this._snackBar.open("Pliki zpisano pomyślnie", "OK", {
        duration: 3000
      });
      this.filesTypes = [];
      this.filesByType = [];
      this.filesToUpload = [];
      this.files = []
    }, e => {
      this._snackBar.open("Wystąpił błąd, proszę spróbować ponownie", "OK", {
        duration: 3000
      });
    });
  }
}
