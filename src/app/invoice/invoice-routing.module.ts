import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { AuthGuard } from '../shared/guards/auth.guard';


const routes: Routes = [
  {
    path: 'invoice', 
    canActivate: [AuthGuard],
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
