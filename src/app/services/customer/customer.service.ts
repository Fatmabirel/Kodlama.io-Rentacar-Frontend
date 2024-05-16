import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer/customers';
import { ListResponseModel } from '../../models/listResponseModel';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44343/api/Customers/GetAll';

  constructor(private HttpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    return this.HttpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}

