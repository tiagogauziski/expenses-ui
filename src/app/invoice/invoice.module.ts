import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';



@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceDetailComponent
  ],
  exports: [
    InvoiceListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvoiceModule { }
