import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../../models/car/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44343/api/Cars/GetAll';

  constructor(private HttpClient: HttpClient) {}

  getCars(): Observable<CarResponseModel> {
    return this.HttpClient.get<CarResponseModel>(this.apiUrl);
  }
}
