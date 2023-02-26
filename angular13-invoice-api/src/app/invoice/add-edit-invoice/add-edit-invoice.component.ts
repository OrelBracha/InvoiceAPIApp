import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { invoiceApiService } from 'src/app/invoice-api.service';
@Component({
  selector: 'app-add-edit-invoice',
  templateUrl: './add-edit-invoice.component.html',
  styleUrls: ['./add-edit-invoice.component.css']
})
export class AddEditinvoiceComponent implements OnInit {

  invoiceList$!: Observable<any[]>;



  constructor(private service:invoiceApiService) {}



  @Input() invoice:any;
  id: number = 0;
  status: string = "";
  date!: Date;
  amount: number = 0;

  ngOnInit(): void {
    this.id = this.invoice.id;
    this.status = this.invoice.status;
    this.date = this.invoice.date;
    this.amount = this.invoice.amount;
    this.invoiceList$ = this.service.getinvoiceList();
    
  }


addinvoice() {
   var invoice = {
    status:this.status,
    date:this.date,
    amount:this.amount
   }
   this.service.addinvoice(invoice).subscribe(res => {
    var closeModalBtn = document.getElementById('add-edit-modal-close');
    if(closeModalBtn) {
      closeModalBtn.click();
    }



    var showAddSuccess = document.getElementById('add-success-alert');
    if(showAddSuccess) {
      showAddSuccess.style.display = "block";
    }
    setTimeout(function() {
     if(showAddSuccess) {
      showAddSuccess.style.display = "none";
     } 
    }, 4000);
   })
}

updateinvoice() {
  var invoice = {
    id:this.id,
    status:this.status,
    date:this.date,
    amount:this.amount
   }
   var id:number = this.id;
   this.service.updateinvoice(id,invoice).subscribe(res => {
    var closeModalBtn = document.getElementById('add-edit-modal-close');
    if(closeModalBtn) {
      closeModalBtn.click();
    }



    var showUpdateSuccess = document.getElementById('update-success-alert');
    if(showUpdateSuccess) {
      showUpdateSuccess.style.display = "block";
    }
    setTimeout(function() {
     if(showUpdateSuccess) {
      showUpdateSuccess.style.display = "none";
     } 
    }, 4000);
   })
}


}
