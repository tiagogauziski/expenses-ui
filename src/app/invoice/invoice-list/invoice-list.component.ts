import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/shared/services/invoice.service';
import { Invoice } from 'src/app/shared/models/invoice';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceDetailModalComponent } from '../invoice-detail-modal/invoice-detail-modal.component';
import { of } from 'rxjs';
import { InvoiceDeleteModalComponent } from '../invoice-delete-modal/invoice-delete-modal.component';

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
            .subscribe(invoices => this.invoices = invoices.data);
    }

    /**
     * Open InvoiceDetailComponent to edit the invoice.
     * @param invoice Invoice to edit
     */
    editInvoice(invoice: Invoice): void {
        const modalRef = this.modalService.open(InvoiceDetailModalComponent);

        modalRef.componentInstance.invoiceObservable = of(invoice);

        modalRef.result.then((value: Invoice) => {
            this.invoiceService.editInvoice(value).subscribe(_ => {
                this.getInvoices();
            });
        });
    }

    /**
     * Open InvoiceDeleteModalComponent to request confirmation
     * If user confirms operation, call service to delete entry.
     * @param invoice Invoice to delete
     */
    deleteInvoice(invoice: Invoice) : void {
        const modalRef = this.modalService.open(InvoiceDeleteModalComponent);

        modalRef.componentInstance.invoiceObservable = of(invoice);

        modalRef.result.then((result: boolean) => {
            if (result) {
                this.invoiceService.deleteInvoice(invoice).subscribe(_ => {
                    this.getInvoices();
                });
            }
        }).catch((reason) => {
            
        });
    }

    /**
     * Open InvoiceDetailComponent to add invoice and submit form
     */
    addInvoice(): void {
        const modalRef = this.modalService.open(InvoiceDetailModalComponent);

        modalRef.componentInstance.invoiceObservable = of({});

        modalRef.result.then((value: Invoice) => {
            value.id = Math.random().toString();
            this.invoiceService.addInvoice(value).subscribe(_ => {
                this.getInvoices();
            });
        });
    }

}
