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
import {HttpClientModule} from "@angular/common/http";
import { Ec2BrowserComponent } from './components/ec2/ec2-browser/ec2-browser.component';
import { Ec2InstanceComponent } from './components/ec2/ec2-instance/ec2-instance.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    HeaderComponent,
    BucketBrowserComponent,
    BucketPickerComponent,
    Ec2BrowserComponent,
    Ec2InstanceComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
