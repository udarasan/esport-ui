import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../../../shared/event-card/service/event.service";
import {EventRegDTO} from "./dto/EventRegDTO";
import {TeamDTO} from "./dto/TeamDTO";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit{

constructor(private route:ActivatedRoute,private eventPageService:EventService) {}
  showFirstDiv = true;
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

  teamDataSource!: TeamDTO[];

  //create-event-registration-details
  eveRegNumber=new FormControl()
  eveRegDob=new FormControl()
  teamId: any;

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

    this.eventPageService.getAllTeams().subscribe((res:any)=>{
      if (res.code == 201) {
        this.teamDataSource = res.data;
        console.log('------------')
        console.log(res.data)
        console.log('------------')
      }
    })


  }


  toggleDiv() {
    this.showFirstDiv = !this.showFirstDiv;
  }

  eventReg() {
    let eventId=localStorage.getItem('username')
    this.eventPageService.creteEventReg(new EventRegDTO(
      0,
      this.eveRegDob.value,
      this.eveRegNumber.value,
      this.eventId,
      this.teamId,
      localStorage.getItem('username') || '',
      this.gameId
    )).subscribe(
      (res:any)=>{
        if (res.code==201){
          alert("Registration Is Success!")
        }else {
          alert("Registration Is Failed!")
        }
    })

  }
}
