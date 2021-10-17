import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bucket} from "../../shared/model/bucket";
import {BUCKET, getEndpointUrl} from "../../shared/rest-api-urls";
import {S3Object} from "../../shared/model/s3Object";

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  constructor(private http: HttpClient) {
  }

  getBuckets(): Observable<Bucket[]> {
    return this.http.get<Bucket[]>(getEndpointUrl(BUCKET));
  }

  getS3Objects(bucketName: string): Observable<S3Object[]> {
    return this.http.get<S3Object[]>(getEndpointUrl(BUCKET) + '/' + bucketName);
  }

  postS3Objects(bucketName: string, files: File[]): Observable<S3Object[]> {
    const formData = new FormData();
    files.forEach(f => formData.append("fileList", f));
    return this.http.post<S3Object[]>(getEndpointUrl(BUCKET) + '/' + bucketName, formData);
  }
}
