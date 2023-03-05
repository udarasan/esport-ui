import { Injectable } from '@angular/core';
import {environment} from "../../../../envitonments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserDTO} from "../dto/UserDTO";
import {AuthDTO} from "../dto/AuthDTO";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.baseUrl+'user';
  authUrl = environment.baseUrl+'auth';
  constructor(private httpClient: HttpClient) { }
  signUp(userDTO:UserDTO): Observable<any> {
    console.log(userDTO)
      return this.httpClient.post(this.url+"/register",userDTO);
    };

  login(authDTO: AuthDTO):Observable<any> {
    return this.httpClient.post(this.authUrl+"/authenticate",authDTO);

  }
}
