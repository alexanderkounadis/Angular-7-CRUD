import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.scss']
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service: PaymentDetailService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.service.refreshList()
  }
  populateForm(pd: PaymentDetail){
    this.service.formData = Object.assign({}, pd);
  }
  onDelete(id:number){  
    if(confirm('Are you sure to delete this record?')){
      this.service.deletePaymentDetail(id).subscribe(
        res=>{
          this.toastrService.warning('Deleted successfully', 'Payment Detail Register');
          this.service.refreshList();
        },
        err=>{
          console.log(err);
        }
      )
    }
    
  }

}
