import {Component, OnInit} from '@angular/core';
import {UserDashboardService} from "../../service/user-dashboard.service";
import {FormControl} from "@angular/forms";
import {UserDTO} from "../../../../../auth/dto/UserDTO";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  constructor(private userDashboardService:UserDashboardService,private router: Router) {}
  username=new FormControl();
  password=new FormControl();
  status=new FormControl();
  phoneNo=new FormControl();
  idPhoto=new FormControl();
  email=new FormControl();
  name=new FormControl();
  roleCode=new FormControl();
  teamId=new FormControl();

  ngOnInit(): void {
    let usernames=sessionStorage.getItem('username')
    this.userDashboardService.getOneUserByUserName(usernames).subscribe((res:any)=>{
      if (res.code=='201'){
          this.username.setValue(res.data.username);
          this.password.setValue(res.data.password),
          this.status.setValue(res.data.status),
          this.phoneNo.setValue(res.data.phoneNo),
          this.idPhoto.setValue(res.data.idPhoto),
          this.email.setValue(res.data.email),
          this.name.setValue(res.data.name),
          this.roleCode.setValue(res.data.roleCode),
          this.teamId.setValue(res.data.teamId)

        console.log(this.username)
      }
    })
  }

  updateUser() {
    this.userDashboardService.updateUserDetails(new UserDTO(this.username.value,this.password.value,'ACT','','',this.email.value,this.username.value,'1',null)).subscribe((res:any)=>{
      if (res.code=='201'){
        this.router.navigate(['/auth/sign-in']);
      }
    })
  }
}




