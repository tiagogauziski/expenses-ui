import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';

import { NgbModule, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceModule } from 'src/app/invoice/invoice.module';
import { NgbDateAdapterCustom } from 'src/app/shared/providers/NgbDateAdapterCustom';
import { NgbDateParserFormatterCustom } from 'src/app/shared/providers/NgbDateParserFormatterCustom';
import { HomeModule } from './home/home.module';
import { StatementModule } from './statement/statement.module';
import { RouterModule } from '@angular/router';
import { AuthInterceptorService  } from './shared/interceptors/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    InvoiceModule,
    StatementModule,
    RouterModule,
    HomeModule
  ],
  providers: [
    {provide: NgbDateAdapter, useClass: NgbDateAdapterCustom },
    {provide: NgbDateParserFormatter, useClass: NgbDateParserFormatterCustom},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
