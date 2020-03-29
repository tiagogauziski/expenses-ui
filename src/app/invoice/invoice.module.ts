import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';



@NgModule({
  declarations: [
    InvoiceListComponent
  ],
  exports: [
    InvoiceListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvoiceModule { }
