import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {getEndpointUrl, POLLY} from "../../shared/rest-api-urls";
import {VoiceResponse} from "../../shared/model/polly/VoiceResponse";
import {GenerateSpeechRequest} from "../../shared/model/polly/GenerateSpeechRequest";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class Ec2Service {

  constructor(private http: HttpClient) {
  }

  getLanguages(): Observable<string[]> {
    const url = `${getEndpointUrl(POLLY)}/languages}`;
    return this.http.get<string[]>(url);
  }

  getVoices(languageCode: string): Observable<VoiceResponse[]> {
    const url = `${getEndpointUrl(POLLY)}/voices?languageCode=${languageCode}`;
    return this.http.get<VoiceResponse[]>(url);
  }

  getSpeech(request: GenerateSpeechRequest): Observable<Blob> {
    const url = `${getEndpointUrl(POLLY)}/generate`;
    return this.http.post(url, request, {responseType: "blob"});
  }
}
