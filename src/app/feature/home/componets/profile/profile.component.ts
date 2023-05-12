import {Component, OnInit} from '@angular/core';
import {EventService} from "../../../../shared/event-card/service/event.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  name= new FormControl();
  email=new FormControl();
  name1: any;
  email1: any;
  team: any;
  team1: any;
  ngOnInit(): void {
    this.getUserDetails();
  }

  constructor(private servise:EventService) {
  }
  getUserDetails(){
    this.servise.getOneUserByToken().subscribe((res:any)=>{
      if (res.code == 201) {
        this.name1 = res.data.name;
        this.email1 = res.data.email;
        this.team1=res.data.teamId
        console.log('------------')
        console.log(res.data)
        console.log('------------')
      }
    })
  };

}
