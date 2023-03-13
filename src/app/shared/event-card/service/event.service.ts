import { Injectable } from '@angular/core';
import {environment} from "../../../../envitonments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url = environment.baseUrl+'event';
  constructor(private httpClient: HttpClient) { }
  getAllEvents(): Observable<any> {
    return this.httpClient.get(this.url+"/getAllEvents",{
      headers:new HttpHeaders({
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      })
    });
  };


}
