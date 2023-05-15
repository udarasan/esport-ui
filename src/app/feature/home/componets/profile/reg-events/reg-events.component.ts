import {Component, OnInit} from '@angular/core';
import {EventService} from "../../../../../shared/event-card/service/event.service";

@Component({
  selector: 'app-reg-events',
  templateUrl: './reg-events.component.html',
  styleUrls: ['./reg-events.component.scss']
})
export class RegEventsComponent implements OnInit{
  name1: any;
  dataSources!: [];

  ngOnInit(): void {
    this.name1=sessionStorage.getItem('username')
    this.getRegEveDetails();
  }
  constructor(private servise:EventService) {
  }
  getRegEveDetails(){
    this.servise.getRegEveDetails().subscribe((res:any)=>{
      if (res.code == 201) {
        this.dataSources=res.data;
      }
    })
  };

}
