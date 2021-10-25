import {Component} from '@angular/core';
import {TextractService} from "../../core/services/textract.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-textract-ocr',
  templateUrl: './textract-ocr.component.html',
  styleUrls: ['./textract-ocr.component.css']
})
export class TextractOcrComponent {
  documentFile!: File;
  imageUrl?: string;
  detectedText$?: Observable<string>;

  constructor(private textractService: TextractService) {
  }

  onFileSelected(event: any) {
    this.documentFile = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => this.imageUrl = reader.result as string;
    reader.readAsDataURL(this.documentFile);
  }

  detectText() {
    this.detectedText$ = this.textractService.detectText(this.documentFile).pipe(map(value => value.detectedText));
  }
}
