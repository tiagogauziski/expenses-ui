import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { RouterModule } from '@angular/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { HomeProfileComponent } from './home-profile/home-profile.component';


@NgModule({
  declarations: [ 
    HomeHeaderComponent, 
    HomeFooterComponent, HomeProfileComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoadingBarHttpClientModule,
  ],
  exports: [
    HomeHeaderComponent,
    HomeFooterComponent
  ]
})
export class HomeModule { }
