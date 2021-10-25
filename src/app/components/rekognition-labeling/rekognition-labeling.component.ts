import {Component} from '@angular/core';
import {ImageLabel} from "../../shared/model/rekognition/imageLabel";
import {RekognitionService} from "../../core/services/rekognition.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-rekognition-labeling',
  templateUrl: './rekognition-labeling.component.html',
  styleUrls: ['./rekognition-labeling.component.css']
})
export class RekognitionLabelingComponent {
  imageFile!: File;
  imageUrl?: string;
  imageLabels$?: Observable<ImageLabel[]>;

  constructor(private rekognitionService: RekognitionService) {
  }

  onImageSelected(event: any) {
    this.imageFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => this.imageUrl = reader.result as string;
    reader.readAsDataURL(this.imageFile);
  }

  labelImage() {
    this.imageLabels$ = this.rekognitionService.detectLabels(this.imageFile);
  }
}
