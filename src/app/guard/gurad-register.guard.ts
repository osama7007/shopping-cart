import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuradRegisterGuard implements  CanDeactivate<RegisterComponent> {
  constructor(private leaveAuth : AuthService){}
  canDeactivate( component: RegisterComponent){
    alert('you did not finished your submission')
    return this.leaveAuth.RegisterVal;
  }
}
