import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceDeleteModalComponent } from './invoice-delete-modal/invoice-delete-modal.component';



@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceDetailComponent,
    InvoiceDeleteModalComponent
  ],
  exports: [
    InvoiceListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class InvoiceModule { }
