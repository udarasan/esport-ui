import {Component, OnInit} from '@angular/core';
import {EventRegDTO} from "../event-page/dto/EventRegDTO";
import {EventService} from "../../../../shared/event-card/service/event.service";
import {TeamDTO} from "../event-page/dto/TeamDTO";
import {FormControl} from "@angular/forms";
import {UserDTO} from "../event-page/dto/UserDTO";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit{
  teamName= new FormControl();
  country= new FormControl();
  description= new FormControl();
  teamMemberDataSource!: UserDTO[];
  username1: any;
  username2: any;
  username3: any;
  username4: any;
 constructor(private eventPageService:EventService) {
 }
  createTeam() {
    this.eventPageService.creteTeam(new TeamDTO(
      0,
      this.teamName.value,
      this.country.value,
      this.description.value,
    )).subscribe(
      (res:any)=>{
        if (res.code==201){
          //add team members
          this.eventPageService.getLastTeam().subscribe((res:any)=>{
            if (res.code==202){
               let teamID=res.data.teamId
              // check all field one by one and update user teamID using if else

            }
          })
          alert("Team Creation Is Success!")
        }else {
          alert("Team Creation Is Failed!")
        }
      })
  }

  ngOnInit(): void {
    this.eventPageService.getAllMembers().subscribe((res:any)=>{
      if (res.code == 201) {
        this.teamMemberDataSource = res.data;
        console.log('------------')
        console.log(res.data)
        console.log('------------')
      }
    })
  }
}
