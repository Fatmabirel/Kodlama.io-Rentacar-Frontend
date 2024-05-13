import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColorResponseModel } from '../../models/color/colorResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44343/api/Colors/GetAll';

  constructor(private HttpClient: HttpClient) {}

  getColors(): Observable<ColorResponseModel> {
    return this.HttpClient.get<ColorResponseModel>(this.apiUrl);
  }
}

