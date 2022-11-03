import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentdashboardComponent } from './documentdashboard/documentdashboard.component';
import { DrivedashboardComponent } from './drivedashboard/drivedashboard.component';
import { DriveloginComponent } from './drivelogin/drivelogin.component';
import { DefaultComponent } from './layouts/default/default/default.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: DriveloginComponent
  },
  {
    path: 'dashboard',
    component: DefaultComponent,
    children: [
      {
      path: '',
      component: DrivedashboardComponent
      },
      {
        path: 'documents',
        component: DocumentdashboardComponent
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
