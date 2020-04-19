import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceDetailModalComponent } from './invoice-detail-modal/invoice-detail-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceDeleteModalComponent } from './invoice-delete-modal/invoice-delete-modal.component';
import { InvoiceRoutingModule } from './invoice-routing.module';



@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceDetailModalComponent,
    InvoiceDeleteModalComponent
  ],
  exports: [
    InvoiceListComponent
  ],
  imports: [
    InvoiceRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class InvoiceModule { }
