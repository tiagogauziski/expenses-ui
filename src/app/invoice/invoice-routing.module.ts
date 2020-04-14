import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';


const routes: Routes = [
  {
    path: 'invoice', 
    // component: TransactionSidebarComponent, 
    // canActivate: [AuthGuard],
    children: [
      { path: '', component: InvoiceListComponent },
      { path: 'list', component: InvoiceListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
