import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brands';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44343/api/Brands/GetAll';

  constructor(private HttpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.HttpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
