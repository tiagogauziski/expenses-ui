import { Component, OnInit } from '@angular/core';
import { Statement } from 'src/app/shared/models/statement';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StatementService } from 'src/app/shared/services/statement.service';

@Component({
  selector: 'expenses-statement-list-grid',
  templateUrl: './statement-list-grid.component.html',
  styleUrls: ['./statement-list-grid.component.scss']
})
export class StatementListGridComponent implements OnInit {

  statements: Statement[];

  constructor(
      private statementService: StatementService,
      private modalService: NgbModal) { }

  ngOnInit(): void {
      this.getStatements();
  }

  /**
   * Get all statements from service
   */
  getStatements(): void { 
    this.statementService.getAll()
            .subscribe(statements => this.statements = statements.data);
  }

  /**
   * Open detail to set amount paid
   */
  setPaidValue(): void { 

  }

}
