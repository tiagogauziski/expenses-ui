import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Invoice } from 'src/app/shared/models/invoice';
import { Observable } from 'rxjs';

@Component({
  selector: 'expenses-invoice-delete-modal',
  templateUrl: './invoice-delete-modal.component.html',
  styleUrls: ['./invoice-delete-modal.component.scss']
})
export class InvoiceDeleteModalComponent implements OnInit {
  @Input() invoiceObservable: Observable<Invoice>;
  invoice: Invoice;

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.invoiceObservable.subscribe(invoice => {
      this.invoice = invoice;
    });
  }

}
