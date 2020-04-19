import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementListGridComponent } from './statement-list-grid/statement-list-grid.component';
import { StatementListCardsComponent } from './statement-list-cards/statement-list-cards.component';
import { StatementRoutingModule } from './statement-routing.module';
import { StatementDetailModalComponent } from './statement-detail-modal/statement-detail-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    StatementListGridComponent, 
    StatementListCardsComponent, StatementDetailModalComponent
  ],
  imports: [
    StatementRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    
  ]
})
export class StatementModule { }
