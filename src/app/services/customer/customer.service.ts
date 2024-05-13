import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColorResponseModel } from '../../models/color/colorResponseModel';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../../models/customer/customerResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44343/api/Customers/GetAll';

  constructor(private HttpClient: HttpClient) {}

  getCustomers(): Observable<CustomerResponseModel> {
    return this.HttpClient.get<CustomerResponseModel>(this.apiUrl);
  }
}

