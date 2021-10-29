import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";
import {BucketBrowserComponent} from "./components/bucket/bucket-browser/bucket-browser.component";
import {BucketArchiveComponent} from './components/bucket/bucket-archive/bucket-archive.component';
import {Ec2BrowserComponent} from './components/ec2/ec2-browser/ec2-browser.component';
import {PollyComponent} from "./components/polly/polly/polly.component";
import {ComprehendSentimentComponent} from "./components/comprehend-sentiment/comprehend-sentiment/comprehend-sentiment.component";
import {TranslationComponent} from './components/translation/translation.component';
import {RekognitionLabelingComponent} from "./components/rekognition-labeling/rekognition-labeling.component";
import {TextractOcrComponent} from "./components/textract-ocr/textract-ocr.component";
import {LoginComponent} from "./components/login/login.component";
import {AlreadyLoggedGuard} from "./core/guards/already-logged.guard";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [AlreadyLoggedGuard]},
  {
    path: '', component: AdminPanelComponent, canActivate: [AuthGuard], children: [
      {path: 'bucket-browser', component: BucketBrowserComponent},
      {path: 'bucket-archive', component: BucketArchiveComponent},
      {path: 'ec2-browser', component: Ec2BrowserComponent},
      {path: 'polly', component: PollyComponent},
      {path: 'comprehend-sentiment', component: ComprehendSentimentComponent},
      {path: 'translation', component: TranslationComponent},
      {path: 'rekognition-labeling', component: RekognitionLabelingComponent},
      {path: 'textract-ocr', component: TextractOcrComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
