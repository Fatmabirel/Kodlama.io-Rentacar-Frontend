import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../../models/rental/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44343/api/Rentals/GetAll';

  constructor(private HttpClient: HttpClient) {}

  getRentals(): Observable<RentalResponseModel> {
    return this.HttpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
