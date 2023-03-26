import { Injectable } from '@angular/core';
import {environment} from "../../../../envitonments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {EventRegDTO} from "../../../feature/home/componets/event-page/dto/EventRegDTO";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url = environment.baseUrl+'event';
  url2 = environment.baseUrl+'eventRegistration';
  url3 = environment.baseUrl+'team';
  constructor(private httpClient: HttpClient) { }
  getAllEvents(): Observable<any> {
    return this.httpClient.get(this.url+"/getAllEvents",{
      headers:new HttpHeaders({
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      })
    });
  };
  getOneEventById(eventId: string | null) :Observable<any>{
    return this.httpClient.get(this.url+"/getOneEvent?eventId="+eventId,{
      headers:new HttpHeaders({
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      })
    });
  }


  creteEventReg(eventRegDTO:EventRegDTO):Observable<any> {
    return this.httpClient.post(this.url2+"/add",{
      "registrationId": 0,
      "eventId": {"eventId":eventRegDTO.eventId},
      "gameId": {"gameId":eventRegDTO.gameId},
      "username": {"username":localStorage.getItem('username')},
      "number": eventRegDTO.number,
      "dob": eventRegDTO.dob,
      "teamId":{"teamId": eventRegDTO.teamId}
    },{
      headers:new HttpHeaders({
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      })}
    )
  }

  getAllTeams() {
    return this.httpClient.get(this.url3+"/getAllTeams",{
      headers:new HttpHeaders({
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      })
    });
  }
}
