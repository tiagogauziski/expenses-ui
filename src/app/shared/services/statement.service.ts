import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Response } from '../models/response';
import { Statement } from '../models/statement';

@Injectable({
  providedIn: 'root'
})
export class StatementService {
  private serverUrl = 'https://localhost:5001';  // URL to web api
  private statementUrl = `${this.serverUrl}/statement`;  // URL to web api

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
      private http: HttpClient) { }

  /**
   * Get all statements
   */
  getAll(): Observable<Response<Statement[]>> {
      return this.http.get<Response<Statement[]>>(this.statementUrl)
          .pipe(
              tap(_ => this.log('fetched statements')),
              catchError(this.handleError<Response<Statement[]>>('StatementService.getAll', {}))
          );
  }

  /**
   * Add a statement
   * @param statement Statement model.
   */
  add(statement: Statement): Observable<Response<Statement>> {
      return this.http.post<Response<Statement>>(this.statementUrl, statement, this.httpOptions)
          .pipe(
              tap((statement: Response<Statement>) => this.log('added statement')),
              catchError(this.handleError<Response<Statement>>('StatementService.add'))
          );
  }

  /**
   * Edit an statement
   * @param statement Statement model.
   */
  edit(statement: Statement): Observable<Response<Statement>> {
      return this.http.put<Response<Statement>>(`${this.statementUrl}/${statement.id}`, statement, this.httpOptions)
          .pipe(
              tap((statement: Response<Statement>) => this.log('edited statement')),
              catchError(this.handleError<Response<Statement>>('StatementService.edit'))
          );
  }

  /**
   * Delete an statement
   * @param statement Statement model.
   */
  delete(statement: Statement): Observable<Response<Statement>> {
      return this.http.delete<Response<Statement>>(`${this.statementUrl}/${statement.id}`)
          .pipe(
              tap((statement: Response<Statement>) => this.log('deleted statement')),
              catchError(this.handleError<Response<Statement>>('StatementService.delete'))
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
