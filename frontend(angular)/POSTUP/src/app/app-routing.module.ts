import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadingingpageComponent } from './components/ladingingpage/ladingingpage.component';
import { SignupComponent } from './components/login/signup/signup.component';

const routes: Routes = [
  { path: '', component: LadingingpageComponent},
  { path: 'home', component: LadingingpageComponent},
  { path: 'login', component: SignupComponent},
  { path: 'userhome', loadChildren: () => import('./modules/userhome/userhome.module').then(m => m.UserhomeModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
