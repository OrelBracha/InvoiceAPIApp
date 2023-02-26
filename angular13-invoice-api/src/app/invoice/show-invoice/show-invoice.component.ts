import { Component,OnInit } from '@angular/core';
import {Observable}  from 'rxjs';
import { invoiceApiService } from 'src/app/invoice-api.service';

@Component({
  selector: 'app-show-invoice',
  templateUrl: './show-invoice.component.html',
  styleUrls: ['./show-invoice.component.css']
})
export class ShowinvoiceComponent implements OnInit {

  invoiceList$!:Observable<any[]>;

  constructor(private service:invoiceApiService) {} 


ngOnInit(): void{
  this.invoiceList$ = this.service.getinvoiceList();
}


modalTitle:string = '';
activateAddEditinvoiceComponent:boolean = false;
invoice:any;


modalAdd() {
  this.invoice = {
   id:0,
   status:null,
   date:null,
   amount:0
  }
   this.modalTitle = "Add invoice";
   this.activateAddEditinvoiceComponent = true;
  }

  modalEdit(item:any)
  {
        this.invoice = item;
        this.modalTitle = "Edit invoice";
        this.activateAddEditinvoiceComponent = true;
  }

  delete(item:any){
    if(confirm(`Are you sure you want to delete invoice ${item.id}`)){
      this.service.deleteinvoice(item.id).subscribe(res => {
       var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
      closeModalBtn.click();
    }



    var showDeleteSuccess = document.getElementById('delete-success-alert');
    if(showDeleteSuccess) {
      showDeleteSuccess.style.display = "block";
    }
    setTimeout(function() {
     if(showDeleteSuccess) {
      showDeleteSuccess.style.display = "none";
     } 
    }, 4000);
    this.invoiceList$ = this.service.getinvoiceList();

      })      
    }
  }

  modalClose() {
    this.activateAddEditinvoiceComponent = false;
    this.invoiceList$ = this.service.getinvoiceList();
  }

}
