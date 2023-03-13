import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../../envitonments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url = environment.baseUrl+'event';
  constructor(private httpClient: HttpClient) { }

  getOneEventById(eventId: string | null) :Observable<any>{
    return this.httpClient.get(this.url+"/getOneEvent?eventId="+eventId,{
      headers:new HttpHeaders({
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      })
    });
  }
}
