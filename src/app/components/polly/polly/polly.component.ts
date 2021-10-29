import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from "rxjs";
import {PollyService} from "../../../core/services/polly.service";
import {MatSelectChange} from "@angular/material/select";
import {VoiceResponse} from "../../../shared/model/polly/VoiceResponse";

@Component({
  selector: 'app-polly',
  templateUrl: './polly.component.html',
  styleUrls: ['./polly.component.scss']
})
export class PollyComponent implements OnInit {

  languages$!: Observable<string[]>;
  voices$: Observable<VoiceResponse[]> = of([]);

  chosenLanguage: string | undefined;
  voiceId: string | undefined;
  text: string | undefined;
  speech: AudioBuffer | undefined;

  @ViewChild("audioElement")
  audioElement!: HTMLAudioElement;

  constructor(private pollyService: PollyService) { }

  ngOnInit(): void {
    this.languages$ = this.pollyService.getLanguages();
  }

  handleLanguageChange(event: MatSelectChange) {
    this.chosenLanguage = event.value;
    this.voices$ = this.pollyService.getVoices(this.chosenLanguage as string);
    this.text = undefined;
  }

  handleVoiceIdChange(event: MatSelectChange) {
    this.voiceId = event.value;
  }


  async generateSpeech() {
    if (this.text !== undefined && this.voiceId !== undefined) {
      const arrayBuffer = await this.pollyService.getSpeech({voiceId: this.voiceId, text: this.text}).toPromise();

      const audioContext = new AudioContext();
      this.speech = await audioContext.decodeAudioData(arrayBuffer);

      const source = audioContext.createBufferSource();
      source.buffer = this.speech;
      source.connect(audioContext.destination);
      source.start();
    }
  }
}
