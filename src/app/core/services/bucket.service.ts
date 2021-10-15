import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bucket} from "../../shared/model/bucket";
import {BUCKET, getEndpointUrl} from "../../shared/rest-api-urls";

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  constructor(private http: HttpClient) {
  }

  getBuckets(): Observable<Bucket[]> {
    return this.http.get<Bucket[]>(getEndpointUrl(BUCKET));
  }
}
