import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {AuthDTO} from "../dto/AuthDTO";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  username = new FormControl();
  password = new FormControl();
constructor(private authService:AuthService,private router: Router) {
}
  loginFunction() {
    this.authService.login(new AuthDTO(this.username.value,this.password.value)).subscribe((res:any)=>{
      if (res.code=='201'){
        sessionStorage.setItem('token', JSON.stringify(res.data.token));
        sessionStorage.setItem('username', JSON.stringify(res.data.username));
        this.router.navigate(['/']);
      }
    })
  }
}
