import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Invoice } from 'src/app/shared/models/invoice';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'expenses-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {
  @Input() invoice: Observable<Invoice>;

  invoiceForm: FormGroup = new FormGroup({
    name: new FormControl(undefined, [
      Validators.required
    ]),
    description: new FormControl(),
    recurrence: new FormGroup({
      recurrenceType: new FormControl(),
      start: new FormControl(),
      times: new FormControl()
    })
  });

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.invoice.subscribe(invoice => {
      this.invoiceForm.patchValue(invoice);
    })
  }

  onSave() : void {
  }

  onClose() : void {
    this.activeModal.close("CLOSE");
  }

}
