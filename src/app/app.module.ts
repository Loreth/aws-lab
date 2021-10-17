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
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRippleModule} from "@angular/material/core";
import { BucketArchiveComponent } from './components/bucket/bucket-archive/bucket-archive.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    HeaderComponent,
    BucketBrowserComponent,
    BucketPickerComponent,
    BucketArchiveComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        MatTableModule,
        MatCheckboxModule,
        MatRippleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
