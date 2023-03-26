import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../../../envitonments/environment";
import {UserDTO} from "../../../../auth/dto/UserDTO";

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {
  url = environment.baseUrl+'user';
  constructor(private httpClient: HttpClient) { }


  getOneUserByUserName(username: string|null) {
    return this.httpClient.get(this.url+"/getOneUser?username="+username,{
      headers:new HttpHeaders({
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      })
    });
  }

  updateUserDetails(userDTO: UserDTO) {
    return this.httpClient.post(this.url+"/updateUser",userDTO,{
      headers:new HttpHeaders({
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      })
    });
  }
}
