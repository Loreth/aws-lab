import {Component, Input} from '@angular/core';
import {ComprehendSentimentResult} from "../../../core/services/comprehend.service";

@Component({
  selector: 'app-comprehend-sentiment-result',
  templateUrl: './comprehend-sentiment-result.component.html',
  styleUrls: ['./comprehend-sentiment-result.component.scss']
})
export class ComprehendSentimentResultComponent {

  @Input() sentimentResult: ComprehendSentimentResult | null = null;

}
