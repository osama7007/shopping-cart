import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private logIn:AuthService) {
   }

  ngOnInit(): void {
  }

    handleLoginForm(form : any){
    }
    submitted(){
      this.logIn.setLogValue(true)
    }
}
