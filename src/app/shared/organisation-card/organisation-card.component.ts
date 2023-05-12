import {Component, OnInit} from '@angular/core';
import {EventService} from "../event-card/service/event.service";

@Component({
  selector: 'app-organisation-card',
  templateUrl: './organisation-card.component.html',
  styleUrls: ['./organisation-card.component.scss']
})
export class OrganisationCardComponent implements OnInit{
  longText="sss";
  dataSource: any;

  constructor(private service:EventService) {
  }
  getAllTeams(){
    this.service.getAllTeams().subscribe((res:any)=>{
      if (res.code == 201) {
        this.
          dataSource= res.data;
      }
    })
  }

  ngOnInit(): void {
    this.getAllTeams();
  }
}
