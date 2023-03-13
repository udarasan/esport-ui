import {Component, OnInit} from '@angular/core';
import {GameService} from "./service/game.service";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit{
  dataSources = [];
  constructor(private gameService:GameService)  {
  }
  ngOnInit(): void {
    this.gameService.getAllGamesz().subscribe((res:any)=>{
      if (res.code=='201'){
        this.dataSources=res.data;
        console.log('---------------------')
        console.log(this.dataSources)
        console.log('---------------------')
      }
    })
  }
}
