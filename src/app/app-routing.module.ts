import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";
import {BucketBrowserComponent} from "./components/bucket/bucket-browser/bucket-browser.component";
import {BucketArchiveComponent} from './components/bucket/bucket-archive/bucket-archive.component';
import {Ec2BrowserComponent} from './components/ec2/ec2-browser/ec2-browser.component';
import {PollyComponent} from "./components/polly/polly/polly.component";

const routes: Routes = [
  {path: '', redirectTo: 'admin-panel', pathMatch: 'full'},
  {path: '', component: AdminPanelComponent},
  {path: 'bucket-browser', component: BucketBrowserComponent},
  {path: 'bucket-archive', component: BucketArchiveComponent},
  {path: 'ec2-browser', component: Ec2BrowserComponent},
  {path: 'polly', component: PollyComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
