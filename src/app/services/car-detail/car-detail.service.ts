import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../../models/listResponseModel';
import { Observable } from 'rxjs';
import { CarDetail } from '../../models/car-detail/car-detail';
import { CarDetailResponseModel } from '../../models/carDetailResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'https://localhost:44343/api/Cars/';

  constructor(private HttpClient: HttpClient) {}
  
  getCarDetails(): Observable<CarDetailResponseModel> {
    let newPath = this.apiUrl + "GetCarDetails";
    return this.HttpClient.get<CarDetailResponseModel>(newPath);
  }

  getCarDetailsById(carId: number): Observable<CarDetailResponseModel> {
    let newPath = this.apiUrl + "GetCarDetailsById?carId=" + carId;
    return this.HttpClient.get<CarDetailResponseModel>(newPath);
  }
}
