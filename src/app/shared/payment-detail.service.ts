import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail = {
    CVV:'',
    CardOwnerName:'',
    ExpirationDate: '',
    CardNumber:'',
    PMId:0
  };
  readonly rootURL: string = 'http://localhost:5000/api';
  list: PaymentDetail[] = [];

  constructor(private http: HttpClient) { }

  postPaymentDetail(){
    return this.http.post(this.rootURL + '/PaymentDetail', this.formData);
  }

  putPaymentDetail(){
    return this.http.put(this.rootURL + '/PaymentDetail/'+this.formData.PMId, this.formData);
  }
  deletePaymentDetail(id:number){
    return this.http.delete(this.rootURL + '/PaymentDetail/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/PaymentDetail')
      .toPromise()
      .then(res=>{
          this.list = res as PaymentDetail[];
      })
  }
}
