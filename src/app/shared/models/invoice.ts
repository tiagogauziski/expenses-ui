import { InvoiceRecurrence } from './invoice-recurrence';

export interface Invoice {
    id: string;
    name: string;
    description: string;
    recurrence: InvoiceRecurrence;
}