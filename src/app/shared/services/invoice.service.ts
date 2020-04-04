import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor() { }

  getInvoices(): Observable<Invoice[]> {
    return of([
      {
        id: '1',
        description: 'Weekly Rent',
        name: 'Rent',
        recurrence: {
          recurrenceType: 'Weekly',
          start: '2020-03-27:00:00:00Z'
        }
      }
    ]);

  }
}
