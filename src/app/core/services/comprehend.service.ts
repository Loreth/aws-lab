import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {COMPREHEND, getEndpointUrl} from "../../shared/rest-api-urls";
import {DetectedLanguageResponse} from '../../shared/model/translate/DetectedLanguageResponse';

export interface ComprehendSentimentResult {
  readonly neutral: number,
  readonly mixed: number,
  readonly negative: number,
  readonly positive: number
}

@Injectable({
  providedIn: 'root'
})
export class ComprehendService {

  constructor(private http: HttpClient) {
  }

  detectSentiment(text: string): Observable<ComprehendSentimentResult> {
    const url = `${getEndpointUrl(COMPREHEND)}/detectSentiment`;

    return this.http.post<ComprehendSentimentResult>(url, {text});
  }

  detectLanguage(text: string): Observable<DetectedLanguageResponse> {
    const url = `${getEndpointUrl(COMPREHEND)}/detectLanguage`;

    return this.http.post<DetectedLanguageResponse>(url, {text});
  }

}
