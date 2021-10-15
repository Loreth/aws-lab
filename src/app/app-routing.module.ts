import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";
import {BucketBrowserComponent} from "./components/bucket/bucket-browser/bucket-browser.component";

const routes: Routes = [
  {path: '', redirectTo: 'admin-panel', pathMatch: 'full'},
  {path: '', component: AdminPanelComponent},
  {path: 'bucket-browser', component: BucketBrowserComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
