import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatementListGridComponent } from './statement-list-grid/statement-list-grid.component';
import { StatementListCardsComponent } from './statement-list-cards/statement-list-cards.component';
import { AuthGuard } from '../shared/guards/auth.guard';


const routes: Routes = [
  {
    path: 'statement', 
    canActivate: [AuthGuard],
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
