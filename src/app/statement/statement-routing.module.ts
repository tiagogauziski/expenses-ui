import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatementListGridComponent } from './statement-list-grid/statement-list-grid.component';
import { StatementListCardsComponent } from './statement-list-cards/statement-list-cards.component';


const routes: Routes = [
  {
    path: 'statement', 
    // component: TransactionSidebarComponent, 
    // canActivate: [AuthGuard],
    children: [
      { path: '', component: StatementListGridComponent },
      { path: 'list-grid', component: StatementListGridComponent },
      { path: 'list-cards', component: StatementListCardsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StatementRoutingModule { }
