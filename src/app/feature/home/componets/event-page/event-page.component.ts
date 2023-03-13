import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../../../shared/event-card/service/event.service";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit{
constructor(private route:ActivatedRoute,private eventPageService:EventService) {}

  country:any
  description:any
  endTime:any
  eventId:any
  eventImage:any
  eventName:any
  eventType:any
  gameId:any
  location:any
  organizer:any
  startTime:any
  ngOnInit(): void {
    let eventId=this.route.snapshot.paramMap.get('id')
    this.eventPageService.getOneEventById(eventId).subscribe((res:any)=>{
      if (res.code=='201'){
        this.eventName=res.data.eventName
        this.country=res.data.country
        this.description=res.data.description
        this.endTime=res.data.endTime
        this.eventId=res.data.eventId
        this.eventImage=res.data.eventImage
        this.eventType=res.data.eventType
        this.gameId=res.data.gameId
        this.location=res.data.location
        this.organizer=res.data.organizer
        this.startTime=res.data.startTime
      }
    })


  }



}
