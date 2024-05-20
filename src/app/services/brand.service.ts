import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brands';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44343/api/';

  constructor(private HttpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + 'Brands/GetAll';
    return this.HttpClient.get<ListResponseModel<Brand>>(newPath);
  }

  addBrand(brand: Brand): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'Brands/Add';
    return this.HttpClient.post<ResponseModel>(newPath, brand);
  }
  updateBrand(brand: Brand): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'Brands/Update';
    return this.HttpClient.post<ResponseModel>(newPath, brand);
  }
}
