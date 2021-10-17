import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bucket} from "../../shared/model/bucket";
import {BUCKET, getEndpointUrl, S3OBJECT} from "../../shared/rest-api-urls";
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
    const httpParams = new HttpParams().set('bucketName', bucketName);
    return this.http.get<S3Object[]>(getEndpointUrl(S3OBJECT), {params: httpParams});
  }
}
