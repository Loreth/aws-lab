import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminPanelComponent} from './components/admin-panel/admin-panel.component';
import {HeaderComponent} from './core/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {BucketBrowserComponent} from './components/bucket/bucket-browser/bucket-browser.component';
import {BucketPickerComponent} from './components/bucket/bucket-picker/bucket-picker.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRippleModule, MatNativeDateModule } from "@angular/material/core";
import {BucketArchiveComponent} from './components/bucket/bucket-archive/bucket-archive.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from "@angular/material/sidenav";
import {Ec2BrowserComponent} from './components/ec2/ec2-browser/ec2-browser.component';
import {Ec2InstanceComponent} from './components/ec2/ec2-instance/ec2-instance.component';
import {MatCardModule} from "@angular/material/card";
import {Ec2InstanceCreatorComponent} from './components/ec2/ec2-instance-creator/ec2-instance-creator.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {PollyComponent} from './components/polly/polly/polly.component';
import {MatSelectModule} from "@angular/material/select";
import {ComprehendSentimentComponent} from './components/comprehend-sentiment/comprehend-sentiment/comprehend-sentiment.component';
import {ComprehendSentimentResultComponent} from './components/comprehend-sentiment/comprehend-sentiment-result/comprehend-sentiment-result.component';
import {TranslationComponent} from './components/translation/translation.component';
import {RekognitionLabelingComponent} from './components/rekognition-labeling/rekognition-labeling.component';
import {TextractOcrComponent} from './components/textract-ocr/textract-ocr.component';
import {LoggingInterceptor} from "./core/interceptors/logging.interceptor";
import {JwtModule} from "@auth0/angular-jwt";
import {ErrorInterceptor} from "./core/interceptors/error.interceptor";
import {AuthService} from "./core/services/auth.service";
import { LoginComponent } from './components/login/login.component';
import { LogsComponent } from './components/logs/logs.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    HeaderComponent,
    BucketBrowserComponent,
    BucketPickerComponent,
    BucketArchiveComponent,
    Ec2InstanceComponent,
    Ec2BrowserComponent,
    Ec2InstanceCreatorComponent,
    PollyComponent,
    ComprehendSentimentComponent,
    ComprehendSentimentResultComponent,
    TranslationComponent,
    RekognitionLabelingComponent,
    TextractOcrComponent,
    LoginComponent,
    LogsComponent
  ],
  imports: [
    JwtModule.forRoot({
      config: {tokenGetter: AuthService.getToken, allowedDomains: ["localhost:8080"]}
    }),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatRippleModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: DatePipe, useClass: DatePipe}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
