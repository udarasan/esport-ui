import {Component, OnInit} from '@angular/core';
import {EventService} from "./service/event.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit{

  dataSource = [];
  constructor(private eventService:EventService,private route:Router) {
  }
  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((res:any)=>{
      if (res.code=='201'){
        this.dataSource=res.data;
        console.log(this.dataSource)
        console.log(this.dataSource.at(1))
      }
    })
  }

  redirectoeventpage(eventId: any) {
    this.route.navigateByUrl('/events/'+eventId)

  }
  redirectoeventRegpage(eventId: any) {
    this.route.navigateByUrl('/eveReg/'+eventId)

  }
}
