import { Component } from '@angular/core';
import {ComprehendSentimentResult, ComprehendService} from "../../../core/services/comprehend.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-comprehend-sentiment',
  templateUrl: './comprehend-sentiment.component.html',
  styleUrls: ['./comprehend-sentiment.component.scss']
})
export class ComprehendSentimentComponent {

  textToAnalyze: string | undefined;
  sentiment$: Observable<ComprehendSentimentResult> | undefined;

  constructor(private comprehendService: ComprehendService) { }

  detectSentiment() {
    if (this.textToAnalyze !== undefined) {
      this.sentiment$ = this.comprehendService.detectSentiment(this.textToAnalyze);
    }
  }

}
