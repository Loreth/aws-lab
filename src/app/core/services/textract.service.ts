import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {getEndpointUrl, TEXTRACT} from "../../shared/rest-api-urls";
import {DetectedText} from "../../shared/model/textract/detectedText";

@Injectable({
  providedIn: 'root'
})
export class TextractService {

  constructor(private http: HttpClient) {
  }

  detectText(file: File): Observable<DetectedText> {
    const formData = new FormData();
    formData.set("file", file);
    return this.http.post<DetectedText>(getEndpointUrl(TEXTRACT), formData);
  }
}
