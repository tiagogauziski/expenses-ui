import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeProfileComponent } from './home/home-profile/home-profile.component';


const routes: Routes = [
  { path: '',   redirectTo: '/invoice', pathMatch: 'full' },
  { path: 'profile', component: HomeProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
