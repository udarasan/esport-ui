import { Injectable } from '@angular/core';
import {environment} from "../../../../envitonments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url = environment.baseUrl+'game';
  constructor(private httpClient: HttpClient) { }
  getAllGamesz(): Observable<any> {
    return this.httpClient.get(this.url+"/getAllGames",{
      headers:new HttpHeaders({
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      })
    });
  };
}
