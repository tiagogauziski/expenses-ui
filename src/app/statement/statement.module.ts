import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementListGridComponent } from './statement-list-grid/statement-list-grid.component';
import { StatementListCardsComponent } from './statement-list-cards/statement-list-cards.component';
import { StatementRoutingModule } from './statement-routing.module';



@NgModule({
  declarations: [
    StatementListGridComponent, 
    StatementListCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatementRoutingModule
  ]
})
export class StatementModule { }
