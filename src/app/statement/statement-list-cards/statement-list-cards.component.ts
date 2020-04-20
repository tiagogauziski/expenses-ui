import { Component, OnInit } from '@angular/core';
import { Statement } from 'src/app/shared/models/statement';
import { StatementDetailModalComponent } from '../statement-detail-modal/statement-detail-modal.component';
import { of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StatementService } from 'src/app/shared/services/statement.service';

@Component({
    selector: 'expenses-statement-list-cards',
    templateUrl: './statement-list-cards.component.html',
    styleUrls: ['./statement-list-cards.component.scss']
})
export class StatementListCardsComponent implements OnInit {
    statements: { [id: number]: Statement[] } = {};
    months: Date[];

    trackByStatement = (index: number, item: Statement) => item.id;

    constructor(
        private statementService: StatementService,
        private modalService: NgbModal) { }

    ngOnInit(): void {
        this.getStatements();
    }

    /**
     * Generate all year months
     */
    getMonths(): Date[] {
        if (!this.months) {
            this.months = [];
            for (let index = 0; index < 12; index++) {
                let date = new Date(new Date().getFullYear(), index, 1);
                this.months.push(date);
            }
        }

        return this.months;
    }

    /**
     * Get all statements from service
     */
    getStatements(): void {
        this.statementService.getAll()
            .subscribe(statements => {
                this.statements = {};
                statements.data.forEach(statement => {
                    if (!this.statements[new Date(statement.date).getMonth()]) {
                        this.statements[new Date(statement.date).getMonth()] = [];
                    }
                    this.statements[new Date(statement.date).getMonth()].push(statement);
                });
            });
    }

    /**
     * Open detail to set amount paid
     */
    setPaidAmount(statement: Statement): void {
        const modalRef = this.modalService.open(StatementDetailModalComponent);

        modalRef.componentInstance.statementObservable = of(statement);

        modalRef.result.then((value: Statement) => {
            this.statementService.edit(value).subscribe(_ => {
                this.getStatements();
            });
        });
    }

}
