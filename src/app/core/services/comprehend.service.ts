import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {COMPREHEND, getEndpointUrl} from "../../shared/rest-api-urls";

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
    const url = `${getEndpointUrl(COMPREHEND)}/detect`;

    return this.http.post<ComprehendSentimentResult>(url, {text});
  }

}
