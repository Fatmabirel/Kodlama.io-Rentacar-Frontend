import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel';
import { Rental } from '../../models/rental/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44343/api/Rentals/GetAll';

  constructor(private HttpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.HttpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
