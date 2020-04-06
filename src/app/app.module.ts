import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';

import { NgbModule, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceModule } from 'src/app/invoice/invoice.module';
import { NgbDateAdapterCustom } from 'src/app/shared/providers/NgbDateAdapterCustom';
import { NgbDateParserFormatterCustom } from 'src/app/shared/providers/NgbDateParserFormatterCustom';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    InvoiceModule
  ],
  providers: [
    {provide: NgbDateAdapter, useClass: NgbDateAdapterCustom },
    {provide: NgbDateParserFormatter, useClass: NgbDateParserFormatterCustom}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
