import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { RouterModule } from '@angular/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';


@NgModule({
  declarations: [ 
    HomeHeaderComponent, 
    HomeFooterComponent 
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
