import { Invoice } from './invoice';

export interface Statement {
    id: string;
    value: number;
    notes: string;
    date: string;
    isPaid: boolean;
    invoice: Invoice;
}