import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Invoice } from '../models/invoice';
import { Response } from '../models/Response';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class InvoiceService {
    private invoiceUrl = 'https://localhost:5001/invoice';  // URL to web api

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient) { }

    /**
     * Get all invoices
     */
    getInvoices(): Observable<Response<Invoice[]>> {
        return this.http.get<Response<Invoice[]>>(this.invoiceUrl)
            .pipe(
                tap(_ => this.log('fetched invoices')),
                catchError(this.handleError<Response<Invoice[]>>('getInvoices', {}))
            );
    }

    /**
     * Add an invoice
     * @param invoice Invoice model.
     */
    addInvoice(invoice: Invoice): Observable<Response<Invoice>> {
        return this.http.post<Response<Invoice>>(this.invoiceUrl, invoice, this.httpOptions)
            .pipe(
                tap((invoice: Response<Invoice>) => this.log('added invoice')),
                catchError(this.handleError<Response<Invoice>>('addInvoice'))
            );
    }

    /**
     * Edit an invoice
     * @param invoice Invoice model.
     */
    editInvoice(invoice: Invoice): Observable<Response<Invoice>> {
        return this.http.put<Response<Invoice>>(`${this.invoiceUrl}/${invoice.id}`, invoice, this.httpOptions)
            .pipe(
                tap((invoice: Response<Invoice>) => this.log('edited invoice')),
                catchError(this.handleError<Response<Invoice>>('editInvoice'))
            );
    }

    /**
     * Delete an invoice
     * @param invoice Invoice model.
     */
    deleteInvoice(invoice: Invoice): Observable<Response<Invoice>> {
        return this.http.delete<Response<Invoice>>(`${this.invoiceUrl}/${invoice.id}`)
            .pipe(
                tap((invoice: Response<Invoice>) => this.log('deleted invoice')),
                catchError(this.handleError<Response<Invoice>>('editInvoice'))
            );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
    }

}
