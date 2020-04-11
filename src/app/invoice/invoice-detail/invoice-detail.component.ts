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
  @Input() invoiceObservable: Observable<Invoice>;
  id: string;
  submitted: boolean = false;

  invoiceForm: FormGroup = new FormGroup({
    name: new FormControl(undefined, [
      Validators.required,
      Validators.maxLength(150)
    ]),
    description: new FormControl(undefined, [
      Validators.maxLength(500)
    ]),
    recurrence: new FormGroup({
      recurrenceType: new FormControl(undefined, [
        Validators.required
      ]),
      start: new FormControl(undefined, [
        Validators.required
      ]),
      times: new FormControl(undefined, [
      ])
    })
  });

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.invoiceObservable.subscribe(invoice => {
      this.invoiceForm.patchValue(invoice);
      this.id = invoice.id;
    })
  }

  onSave() : void {
    this.submitted = true;

    if (this.invoiceForm.valid) {
      // Merge id into invoiceForm value
      this.activeModal.close({...this.invoiceForm.value, ...{ id: this.id }});
    }
    else {
      console.log("Invalid Form")
    }
  }

  onSubmit(): void {
    
  }

  onClose() : void {
    this.activeModal.dismiss("CLOSE");
  }

}
