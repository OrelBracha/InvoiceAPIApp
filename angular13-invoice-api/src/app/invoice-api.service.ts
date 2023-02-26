import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class invoiceApiService {

  
  readonly invoiceAPIUrl = "https://localhost:7120/api";
  
  constructor(private http:HttpClient) { }

  getinvoiceList():Observable<any[]>  {
    return this.http.get<any>(this.invoiceAPIUrl + '/invoices');
  }


  addinvoice(data:any) {
   return this.http.post(this.invoiceAPIUrl + '/invoices', data);

  }
  updateinvoice(id:number|string, data:any){
    return this.http.put(this.invoiceAPIUrl + `/invoices/${id}`, data);
  } 
  
  deleteinvoice(id:number|string)
  {
    return this.http.delete(this.invoiceAPIUrl + `/invoices/${id}`);
  }


   /*
   // invoice Types

   getinvoiceTypesList():Observable<any[]>  {
    return this.http.get<any>(this.invoiceAPIUrl + '/invoiceTypes');
  }


  addinvoiceTypes(data:any) {
   return this.http.post(this.invoiceAPIUrl + '/invoiceTypes', data);

  }
  updateinvoiceTypes(id:number|string, data:any){
    this.http.put(this.invoiceAPIUrl + `/invoiceTypes/${id}`, data);
  } 
  
  deleteinvoiceTypes(id:number|string)
  {
    return this.http.delete(this.invoiceAPIUrl + `/invoiceTypes/${id}`);
  }

  //Statuses
  
  getStatusList():Observable<any[]>  {
    return this.http.get<any>(this.invoiceAPIUrl + '/status');
  }


  addStatus(data:any) {
   return this.http.post(this.invoiceAPIUrl + '/status', data);

  }
  updateStatus(id:number|string, data:any){
    this.http.put(this.invoiceAPIUrl + `/status/${id}`, data);
  } 
  
  deleteStatus(id:number|string)
  {
    return this.http.delete(this.invoiceAPIUrl + `/status/${id}`);
  }

    */

  }

