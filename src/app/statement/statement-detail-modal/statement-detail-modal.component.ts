import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Statement } from 'src/app/shared/models/statement';

@Component({
  selector: 'expenses-statement-detail-modal',
  templateUrl: './statement-detail-modal.component.html',
  styleUrls: ['./statement-detail-modal.component.scss']
})
export class StatementDetailModalComponent implements OnInit {
  @Input() statementObservable: Observable<Statement>;
  statement: Statement;
  submitted: boolean = false;

  statementForm: FormGroup = new FormGroup({
    date: new FormControl(),
    notes: new FormControl(undefined, [
      Validators.maxLength(500)
    ]),
    amount: new FormControl(),
    invoice: new FormGroup({
      name: new FormControl()
    })
  });
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.statementObservable.subscribe(statement => {
      this.statement = statement;
      this.statementForm.patchValue(statement);
    })
  }

  onSave() : void {
    this.submitted = true;
    if (this.statementForm.valid) {
      // Merge id into invoiceForm value
      this.activeModal.close({...this.statement, ...{ amount: this.statementForm.value.amount, notes: this.statementForm.value.notes, isPaid: true }});
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
