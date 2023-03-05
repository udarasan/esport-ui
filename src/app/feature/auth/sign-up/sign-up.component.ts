import { Component } from '@angular/core';
import {UserDTO} from "../dto/UserDTO";
import {AuthService} from "../service/auth.service";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  username = new FormControl();
  email = new FormControl();
  country = new FormControl();
  password = new FormControl();
  cpassword = new FormControl();
  constructor(private authService:AuthService,private router: Router) {

  }

  signUpFunction() {
    this.authService.signUp(new UserDTO(this.username.value,this.password.value,'ACT','','',this.email.value,this.username.value,'1',null)).subscribe((res:any)=>{
      if (res.code=='201'){
        this.router.navigate(['/auth/sign-in']);
      }
    })
  }
}
