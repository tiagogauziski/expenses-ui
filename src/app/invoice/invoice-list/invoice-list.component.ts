import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/shared/services/invoice.service';
import { Invoice } from 'src/app/shared/models/invoice';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceDetailComponent } from '../invoice-detail/invoice-detail.component';
import { of } from 'rxjs';

@Component({
  selector: 'expenses-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[];

  constructor(
    private invoiceService: InvoiceService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getInvoices();
  }

  /**
   * Get invoices and populate it on local variable
   */
  getInvoices(): void {
    this.invoiceService.getInvoices()
      .subscribe(invoices => this.invoices = invoices);
  }

  /**
   * Open InvoiceDetailComponent to edit the invoice.
   * @param invoice Invoice to edit
   */
  editInvoice(invoice: Invoice): void {
    const modalRef = this.modalService.open(InvoiceDetailComponent);

    modalRef.componentInstance.invoice = of(invoice);
  }

}
