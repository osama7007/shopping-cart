import { Component, OnInit } from '@angular/core';
import { ApiHolderService } from '../services/api-holder.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private api:ApiHolderService) {
   }

  ngOnInit(): void {
  }

    handleLoginForm(form : any){
      console.log(form);
    }
}
