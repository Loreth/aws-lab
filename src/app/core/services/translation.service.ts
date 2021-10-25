import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {getEndpointUrl, TRANSLATION} from '../../shared/rest-api-urls';
import {TranslationRequest} from '../../shared/model/translate/TranslationRequest';
import {TranslationResponse} from '../../shared/model/translate/TranslationResponse';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private http: HttpClient) {
  }

  detectLanguage(textToTranslate: string, sourceLanguageCode: string, targetLanguageCode: string): Observable<TranslationResponse> {
    const url = `${getEndpointUrl(TRANSLATION)}/translate`;
    const request: TranslationRequest = {textToTranslate, sourceLanguageCode, targetLanguageCode}
    return this.http.post<TranslationResponse>(url, request);
  }
}
