import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ 
    HomeHeaderComponent, 
    HomeFooterComponent 
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeHeaderComponent,
    HomeFooterComponent
  ]
})
export class HomeModule { }
