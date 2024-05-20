import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { TokenModel } from '../../models/tokenModel';
import { LoginModel } from '../../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44343/api/Auth/';

  constructor(private httpClient:HttpClient) { }

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login",loginModel)
  }
}
