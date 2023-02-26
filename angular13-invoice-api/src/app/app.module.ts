import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { invoiceComponent } from './invoice/invoice.component';
import { ShowinvoiceComponent } from './invoice/show-invoice/show-invoice.component';
import { AddEditinvoiceComponent } from './invoice/add-edit-invoice/add-edit-invoice.component';
import { invoiceApiService } from './invoice-api.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    invoiceComponent,
    ShowinvoiceComponent,
    AddEditinvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
