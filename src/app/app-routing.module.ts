import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";

const routes: Routes = [
  {path: '', redirectTo: 'admin-panel', pathMatch: 'full'},
  {path: '', component: AdminPanelComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}