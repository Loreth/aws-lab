import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {getEndpointUrl, REKOGNITION_LABELLING} from "../../shared/rest-api-urls";
import {ImageLabel} from "../../shared/model/rekognition/imageLabel";

@Injectable({
  providedIn: 'root'
})
export class RekognitionService {

  constructor(private http: HttpClient) {
  }

  detectLabels(imageFile: File): Observable<ImageLabel[]> {
    const formData = new FormData();
    formData.set("imageFile", imageFile);
    return this.http.post<ImageLabel[]>(getEndpointUrl(REKOGNITION_LABELLING), formData);
  }
}
