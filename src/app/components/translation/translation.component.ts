import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {LANGUAGES} from './languagesDictionary';
import {DetectedLanguageResponse} from '../../shared/model/translate/DetectedLanguageResponse';
import {ComprehendService} from '../../core/services/comprehend.service';
import {TranslationService} from '../../core/services/translation.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {
  translatedText: FormControl = new FormControl({value: '', disabled: true});
  textToTranslate: FormControl = new FormControl('');
  languageSource: FormControl = new FormControl('');
  languageTarget: FormControl = new FormControl('');
  languages = LANGUAGES;
  detectedLanguage: DetectedLanguageResponse | undefined;


  constructor(private comprehendService: ComprehendService, private translationService: TranslationService) {
  }

  ngOnInit(): void {
  }

  detectLanguage() {
    this.comprehendService.detectLanguage(this.textToTranslate.value).subscribe(r => {
      this.detectedLanguage = r
      const lang = this.languages[r.languageCode];
      this.languageSource.setValue(r.languageCode);
    })
  }

  translate() {
    this.translationService.detectLanguage(this.textToTranslate.value, this.languageSource.value, this.languageTarget.value).subscribe(r => {
      this.translatedText.setValue(r.translatedText);
      this.translatedText.enable();
    })
  }

}
