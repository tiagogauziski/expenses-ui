import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeProfileComponent } from './home/home-profile/home-profile.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: '/invoice',
                pathMatch: 'full'
            },
            {
                path: 'profile', 
                component: HomeProfileComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
